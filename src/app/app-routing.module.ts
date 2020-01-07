import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from './models/Home';
import {HomeComponent} from './HomeMain/home/home.component';
import {HomeDetailComponent} from './HomeMain/home-detail/home-detail.component';
import {HomeAddComponent} from './HomeMain/home-add/home-add.component';
import {HomeEditComponent} from './HomeMain/home-edit/home-edit.component';
import {FormUploadComponent} from "./upload/form-upload/form-upload.component";
import {ListUploadComponent} from "./upload/list-upload/list-upload.component";


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
    path: 'upload/:id', component: FormUploadComponent
  },
  {
    path: 'all', component: ListUploadComponent
  }
  // {
  //   path: '', redirectTo: 'homes', pathMatch: 'full'
  // },
  // {
  //   path: '**', redirectTo: 'homes', pathMatch: 'full'
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
