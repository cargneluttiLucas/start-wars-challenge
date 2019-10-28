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
      
    }, 1000);
    return subject.asObservable();
  }

  getAllUsers() { }

  getUserById() { }

  private getUsers() {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }

    return JSON.parse(localStorage.users);
  }

  private setUser(users: User[]) {
    localStorage.users = JSON.stringify(users);
  }
}
