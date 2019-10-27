import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartShips } from '../models/starships.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  allShips(): Observable<StartShips> {
    return this.http.get<StartShips>('https://swapi.co/api/starships');
  }
}
