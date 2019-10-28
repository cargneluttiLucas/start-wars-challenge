import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShips } from '../models/starships.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  url = 'https://swapi.co/api/starships';

  constructor(private http: HttpClient) { }


  allShips(): Observable<any> {
    return this.http.get(this.url);
  }

  shipById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
}
