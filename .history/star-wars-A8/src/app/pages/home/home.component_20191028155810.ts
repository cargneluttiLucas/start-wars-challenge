import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { StarShips } from 'src/app/models/starships.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listStarShip: StarShips[] = [];

  isLoading = false;

  constructor(private startShipService: StarshipsService) { }

  ngOnInit() {
    this.startShipService.allShips().subscribe((item) => {
      console.log(item);
      if (item) {
        this.listStarShip = item.results;
      }
    });
  }

}
