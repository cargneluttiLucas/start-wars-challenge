import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './starship.component';
import { StartshipRoutingModule } from './startship.routing';
import { SharedModule } from 'src/app/shared/sharesd.module';



@NgModule({
  declarations: [StarshipComponent],
  exports: [StarshipComponent],
  imports: [
    CommonModule,
    SharedModule,
    StartshipRoutingModule
  ]
})
export class StarshipModule { }
