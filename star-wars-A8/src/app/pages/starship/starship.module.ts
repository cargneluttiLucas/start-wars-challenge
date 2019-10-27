import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './starship.component';
import { StartshipRoutingModule } from './startship.routing';



@NgModule({
  declarations: [StarshipComponent],
  exports: [StarshipComponent],
  imports: [
    CommonModule,
    StartshipRoutingModule
  ]
})
export class StarshipModule { }
