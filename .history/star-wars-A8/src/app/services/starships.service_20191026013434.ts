import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  allShips(): Observable {
    return this.http.get('https://swapi.co/api/starships');
  }
}
