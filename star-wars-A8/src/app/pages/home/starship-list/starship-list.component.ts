import { Component, OnInit, Input } from '@angular/core';
import { StarShips } from 'src/app/models/starships.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  @Input() ship: StarShips;
  @Input() index: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickEvent() {
    const aux = this.ship.url.substr(31, 2);
    if (aux) {
      this.router.navigate(['starship/' + aux]);
    }
  }
}
