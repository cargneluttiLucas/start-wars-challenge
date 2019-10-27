import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private startShipService: StarshipsService) { }

  ngOnInit() {
    console.log('asdasd', this.startShipService.allShips());
  }

}
