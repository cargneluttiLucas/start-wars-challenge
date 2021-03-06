import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { StarShips } from 'src/app/models/starships.model';
import { Login1Service } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  listStarShip: StarShips[] = [];
  userActive = new User();
  isLoading = false;
  isActiveSubscription = new Subscription();

  constructor(
    private cdRef: ChangeDetectorRef,
    private startShipService: StarshipsService,
    private loginService: Login1Service,
    private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.isActiveSubscription = this.loginService.isUserActive().subscribe((result) => {
      if (result === false) {
        this.cdRef.detectChanges();
        this.router.navigate(['login']);
      } else {
        this.userActive = result;
        this.cdRef.detectChanges();
      }
    });
    this.getAllShips(1);

  }

  claseSession() {
    this.loginService.logout().subscribe((result) => {
      if (result) {
        this.router.navigate(['login']);
      }
    });
  }

  getAllShips(id) {
    this.startShipService.allShips(id).subscribe((item) => {
      if (item) {
        this.listStarShip = item.results;
        switch (id) {
          case 1: {
            this.listStarShip.forEach( (ship , index) => {
              ship.idImg = index + 1;
            });
            break;
          }
          case 2: {
            this.listStarShip.forEach( (ship , index) => {
              ship.idImg = index + 11;
            });
            break;
          }
          case 3: {
            this.listStarShip.forEach( (ship , index) => {
              ship.idImg = 21;
            });
            break;
          }
          case 4: {
            this.listStarShip.forEach( (ship , index) => {
              ship.idImg = 21;
            });
            break;
          }
        }
        this.isLoading = false;
        this.cdRef.detectChanges();
      }
    });
  }

  pagination(id: any) {
    this.getAllShips(id);
  }

  ngOnDestroy() {
    this.isActiveSubscription.unsubscribe();
  }

}
