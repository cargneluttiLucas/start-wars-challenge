import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  @Input() ship: any;
  @Input() index = 5;

  constructor() { }

  ngOnInit() {
  }

  clickEvent(event) {
  }
}
