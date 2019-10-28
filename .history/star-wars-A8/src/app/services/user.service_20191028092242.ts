import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { isEmpty } from '../shared/forms/custom-validators/custom-validators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(user: User): Observable<any> {
    const subject = new Subject<any>();
    console.log(user);
    setTimeout(() => {
      if (user.name !== '' && user.lastName !== '' && user.userName !== '' && isEmpty(user.pass)) {
        const users = this.getUsers();
        const lastUser = users[users.length - 1];
        user.id = lastUser.id + 1;
        users.push(user);
        console.log('post add', user);
        this.setUser(users);
        subject.next(user);
      }
      subject.next(false);
    }, 1000);
    return subject.asObservable();
  }

  getAllUsers() { }

  getUserById() { }

  private getUsers(): User[] {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }

    return JSON.parse(localStorage.users);
  }

  private setUser(users: User[]) {
    localStorage.users = JSON.stringify(users);
  }
}
