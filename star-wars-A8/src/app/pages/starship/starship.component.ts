import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { Login1Service } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StarShips } from 'src/app/models/starships.model';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipComponent implements OnInit {

  isLoading = false;
  ship = new StarShips();

  constructor(
    private cdRef: ChangeDetectorRef,
    private startShipService: StarshipsService,
    private loginService: Login1Service,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.isLoading = true;
      this.startShipService.shipById(params.get('id')).subscribe((response) => {
        if (response) {
          this.ship = response;
          this.isLoading = false;
          this.cdRef.detectChanges();
        }
      });
    });
  }

  claseSession() {
    this.loginService.logout().subscribe((result) => {
      if (result) {
        this.router.navigate(['login']);
      }
    });
  }

  backToHome() {
    this.router.navigate(['home']);
  }

}
