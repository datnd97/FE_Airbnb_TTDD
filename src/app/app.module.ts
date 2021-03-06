import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/homes/home/home.component';
import {HomeDetailComponent} from './component/homes/home-detail/home-detail.component';
import {HomeAddComponent} from './component/homes/home-add/home-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './component/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeEditComponent } from './component/homes/home-edit/home-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './user/component/information/login/login.component';
import { RegisterComponent } from './user/component/information/register/register.component';
import {JwtInterceptor} from './model/user/jwt-interceptor';
import {ErrorInterceptor} from './model/user/error-interceptor';
import { ChangePasswordComponent } from './user/component/information/change-password/change-password.component';
import { HomeStatusComponent } from './component/homes/home-status/home-status.component';
import {BookingComponent} from './component/Booking_Component/booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user/component/user-list/user-list.component';
import { BookingListByUserComponent } from './component/Booking_Component/booking-list-by-user/booking-list-by-user.component';
import { BookingCancelComponent } from './component/Booking_Component/booking-cancel/booking-cancel.component';
import { BookingListHiredHostComponent } from './component/Booking_Component/booking-list-hired-host/booking-list-hired-host.component';
import { HomeUploadComponent } from './component/homes/home-upload/home-upload.component';
import { HomeImagesComponent } from './component/homes/home-images/home-images.component';
import { HomeManagerHostComponent } from './component/homes/home-manager-host/home-manager-host.component';
import { HomeDeleteComponent } from './component/homes/home-delete/home-delete.component';
import { CommentComponent } from './component/Comment_Component/comment/comment.component';
import { CommentCreateComponent } from './component/Comment_Component/comment-create/comment-create.component';
import { ProfileComponent } from './user/component/profile/profile.component';
import { ProfileEditComponent } from './user/component/profile-edit/profile-edit.component';
import { HomeCheckinComponent } from './component/Checkin_Home/home-checkin/home-checkin.component';
import { HomeCheckinListComponent } from './component/Checkin_Home/home-checkin-list/home-checkin-list.component';
import { BookingDeleteByHostComponent } from './component/Booking_Component/booking-delete-by-host/booking-delete-by-host.component';
import { UserChangePasswordComponent } from './user/component/user-change-password/user-change-password.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeAddComponent,
    HeaderComponent,
    HomeEditComponent,
    HomeStatusComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    BookingComponent,
    UserListComponent,
    BookingListByUserComponent,
    BookingCancelComponent,
    BookingListHiredHostComponent,
    HomeUploadComponent,
    HomeImagesComponent,
    HomeManagerHostComponent,
    HomeDeleteComponent,
    CommentComponent,
    CommentCreateComponent,
    ProfileComponent,
    ProfileEditComponent,
    HomeCheckinComponent,
    HomeCheckinListComponent,
    BookingDeleteByHostComponent,
    UserChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    CKEditorModule,
    NgbModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
