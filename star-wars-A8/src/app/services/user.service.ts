import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartShips } from '../models/starships.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  createUser() {}

  getAllUsers() {}

  getUserById() {}
}
