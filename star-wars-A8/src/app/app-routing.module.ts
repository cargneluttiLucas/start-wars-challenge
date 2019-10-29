import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'starship', loadChildren: './pages/starship/starship.module#StarshipModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
