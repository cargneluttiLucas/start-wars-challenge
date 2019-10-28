import { Component, OnInit, Input } from '@angular/core';
import { StartShips } from 'src/app/models/starships.model';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  @Input()
  ship: StartShips = new StartShips();

  constructor() { }

  ngOnInit() {
  }

}
