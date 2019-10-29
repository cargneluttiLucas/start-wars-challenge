import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { StarShips } from 'src/app/models/starships.model';
import { Login1Service } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  listStarShip: StarShips[] = [];

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
      }
    });
    this.startShipService.allShips().subscribe((item) => {
      console.log(item);
      if (item) {
        this.listStarShip = item.results;
        this.isLoading = false;
        this.cdRef.detectChanges();
      }
    });
  }

  claseSession() {
    this.loginService.logout().subscribe((result) => {
      if (result) {
        this.router.navigate(['login']);
      }
    });
  }

  ngOnDestroy() {
    this.isActiveSubscription.unsubscribe();
  }

}
