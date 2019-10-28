import { Component, OnInit } from '@angular/core';
import { StartShips } from 'src/app/models/starships.model';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  ship: StartShips = new StartShips();

  constructor() { }

  ngOnInit() {
  }

}
