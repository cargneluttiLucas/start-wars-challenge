import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { SharedModule } from 'src/app/shared/sharesd.module';



@NgModule({
  declarations: [HomeComponent, StarshipListComponent],
  exports: [HomeComponent, StarshipListComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
