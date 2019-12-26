import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from './models/Home';
import {HomeComponent} from './HomeMain/home/home.component';
import {HomeDetailComponent} from './HomeMain/home-detail/home-detail.component';
import {HomeAddComponent} from './HomeMain/home-add/home-add.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
