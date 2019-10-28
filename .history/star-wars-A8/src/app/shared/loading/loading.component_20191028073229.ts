import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() size = 'medium';
  @Input()
  set type(type: string) {
    this.typeLoadingClass = LoadingTypeStyleMapping.get(type) || LoadingTypeStyleMapping.get('primary');
  }
  typeLoadingClass = LoadingTypeStyleMapping.get('primary');
  @Input() withBg = false;

  constructor() { }

  ngOnInit() {
  }

}
