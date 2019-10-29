import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { isEmpty } from '../shared/forms/custom-validators/custom-validators';
import { isUndefined, isError } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(user: User): Observable<any> {
    const subject = new Subject<any>();
    setTimeout(() => {
      if (user.name !== '' && user.lastName !== '') {
        const users = this.getUsers();
        const lastUser = users[users.length - 1];
        if (isUndefined(lastUser)) {
          user.id = 1;
        } else {
          user.id = lastUser.id + 1;
        }
        users.push(user);
        this.setUser(users);
        subject.next(user);
      }
      subject.next(false);
    }, 1000);
    return subject.asObservable();
  }

  getAllUsers(): User[] {
    return this.getUsers();
  }

  getUserById(id: number) {
    this.getUsers().find(user => user.id === id);
  }

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
