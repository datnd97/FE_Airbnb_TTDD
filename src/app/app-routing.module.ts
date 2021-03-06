import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from './model/home/Home';
import {RegisterComponent} from './user/component/information/register/register.component';
import {LoginComponent} from './user/component/information/login/login.component';

import {HomeComponent} from './component/homes/home/home.component';
import {HomeDetailComponent} from './component/homes/home-detail/home-detail.component';
import {HomeAddComponent} from './component/homes/home-add/home-add.component';
import {HomeEditComponent} from './component/homes/home-edit/home-edit.component';
import {BookingComponent} from './component/Booking_Component/booking/booking.component';
import {BookingListByUserComponent} from './component/Booking_Component/booking-list-by-user/booking-list-by-user.component';
import {BookingListHiredHostComponent} from './component/Booking_Component/booking-list-hired-host/booking-list-hired-host.component';
import {HomeUploadComponent} from './component/homes/home-upload/home-upload.component';
import {HomeManagerHostComponent} from './component/homes/home-manager-host/home-manager-host.component';
import {CommentComponent} from './component/Comment_Component/comment/comment.component';
import {ProfileComponent} from './user/component/profile/profile.component';
import {HomeCheckinComponent} from './component/Checkin_Home/home-checkin/home-checkin.component';
import {HomeCheckinListComponent} from './component/Checkin_Home/home-checkin-list/home-checkin-list.component';
import {UserChangePasswordComponent} from './user/component/user-change-password/user-change-password.component';


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
    path: 'booking-user-list', component: BookingListByUserComponent
  },
  {
    path: 'booking-hired-list', component: BookingListHiredHostComponent
  },
  {
    path: 'upload-image/:id', component: HomeUploadComponent
  },
  {
    path: 'home-manager', component: HomeManagerHostComponent
  },
  {
    path: 'comment', component: CommentComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'home-checkin', component: HomeCheckinComponent
  },
  {
    path: 'home-checkin-list', component: HomeCheckinListComponent
  },
  {
    path: 'change-password', component: UserChangePasswordComponent
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
