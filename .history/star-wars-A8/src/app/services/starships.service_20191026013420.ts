import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  allShips() {
    return this.http.get('https://swapi.co/api/')
  }
}
