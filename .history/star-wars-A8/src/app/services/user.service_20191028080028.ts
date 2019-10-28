import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  createUser(user: User): Observable<any> {
    const subject = new Subject<any>();
    



    return subject.asObservable();

  }

  getAllUsers() {}

  getUserById() {}
}
