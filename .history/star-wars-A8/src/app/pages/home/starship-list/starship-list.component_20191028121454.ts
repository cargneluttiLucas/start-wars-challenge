import { Component, OnInit, Input } from '@angular/core';
import { StarShips } from 'src/app/models/starships.model';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  @Input()
  ship: StarShips;

  constructor() { }

  ngOnInit() {
  }

}
