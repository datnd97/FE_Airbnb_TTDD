import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from './models/Home';
<<<<<<< HEAD
import {HomeComponent} from './HomeMain/home/home.component';
import {HomeDetailComponent} from './HomeMain/home-detail/home-detail.component';
import {HomeAddComponent} from './HomeMain/home-add/home-add.component';
import {HomeEditComponent} from './HomeMain/home-edit/home-edit.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';

import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';


=======
import {HomeComponent} from './component/homes/home/home.component';
import {HomeDetailComponent} from './component/homes/home-detail/home-detail.component';
import {HomeAddComponent} from './component/homes/home-add/home-add.component';
import {HomeEditComponent} from './component/homes/home-edit/home-edit.component';
>>>>>>> a2504c7d40eae8fa1c57d1c67f621d033ee339f1


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
<<<<<<< HEAD
  {
    path: 'upload/:id', component: FormUploadComponent
  },
  {
    path: 'all', component: ListUploadComponent
  },
  {
    path: 'home-login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },



=======
>>>>>>> a2504c7d40eae8fa1c57d1c67f621d033ee339f1

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
