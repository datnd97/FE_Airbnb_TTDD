import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from './model/home/Home';
import {RegisterComponent} from './user/component/information/register/register.component';
import {LoginComponent} from './user/component/information/login/login.component';

import {HomeComponent} from './component/homes/home/home.component';
import {HomeDetailComponent} from './component/homes/home-detail/home-detail.component';
import {HomeAddComponent} from './component/homes/home-add/home-add.component';
import {HomeEditComponent} from './component/homes/home-edit/home-edit.component';
import {BookingComponent} from './component/booking/booking.component';


const routes: Routes = [
  {
    path: 'homes',
    component: HomeComponent
  },
  {
  path: 'homes/:id',
  component: HomeDetailComponent
  },
  {
    path: 'create',
    component: HomeAddComponent
  },
  {
    path: 'edit/:id', component: HomeEditComponent,
  },
  {
    path: 'home-login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'booking/:id', component: BookingComponent
  },
  {
    path: '', redirectTo: 'homes', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'homes', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
