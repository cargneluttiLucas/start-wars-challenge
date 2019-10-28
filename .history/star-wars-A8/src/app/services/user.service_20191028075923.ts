import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartShips } from '../models/starships.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor( private http: HttpClient) { }


  createUser(user: User): Observable<any> {

  }

  getAllUsers() {}

  getUserById() {}


  public suscribeKeyPress(name?: string): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      const subject = new Subject<any>();
      this.keypressSubscription = fromEvent(
        (this.documentService.nativeDocument.querySelector('body') as HTMLElement), 'keydown')
        .subscribe((event: KeyboardEvent) => {
          if (name && name === event.key) {
            subject.next(true);
          } else {
            subject.next(event.key);
          }
        });
      return subject.asObservable();
    }
  }
}
