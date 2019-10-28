import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { StarshipListComponent } from './starship-list/starship-list.component';



@NgModule({
  declarations: [HomeComponent, StarshipListComponent],
  exports: [HomeComponent, StarshipListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
