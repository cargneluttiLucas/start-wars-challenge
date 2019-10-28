import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShips } from '../models/starships.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  allShips(): Observable<any> {
    return this.http.get('https://swapi.co/api/starships');
  }

  shipById(id: number): Observable<any> {
    return this.http.get('https://swapi.co/api/starships', id);
  }
}
