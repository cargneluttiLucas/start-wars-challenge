import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Subject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class Login1Service {
  constructor(private userService: UserService) { }

  login(userName: string, pass: string): Observable<any> {
    const subject = new Subject<any>();
    setTimeout(() => {
      if (userName !== '' && pass !== '') {
        this.userService.getAllUsers().forEach((user) => {
          if (user.userName === userName && atob(user.pass) === pass) {
            this.userActive(user);
            subject.next(user);
          }
        });
      }
      subject.next(false);
    }, 1000);
    return subject.asObservable();
  }

  userActive(user: User) {
    if (user) {
      user.active = true;
      this.setUserActive(user);
    }
  }

  isUserActive(): Observable<any> {
    const subject = new Subject<any>();
    setTimeout(() => {
      if (localStorage.userActive) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    }, 1000);
    return subject.asObservable();
  }

  logout(): Observable<any> {
    const subject = new Subject<any>();
    setTimeout(() => {
      if (localStorage.userActive) {
        localStorage.removeItem('userActive');
        subject.next(true);
      }
      subject.next(false);
    }, 1000);
    return subject.asObservable();
  }

  private setUserActive(user: User) {
    localStorage.userActive = JSON.stringify([]);
    localStorage.userActive = JSON.stringify(user);
  }
}
