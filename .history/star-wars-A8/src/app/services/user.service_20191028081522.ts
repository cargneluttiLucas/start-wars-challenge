import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }


  createUser(user: User): Observable<any> {
    const subject = new Subject<any>();
    setTimeout(() => {
      if (user.name !== '' && user.lastName !== '' && user.userName !== '' && user.pass !== '' && this.getUsers().includes(user)) {
        const users = this.getUsers();
        users.push(user);
        this.setUser(users);
      }
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
