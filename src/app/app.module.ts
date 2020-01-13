import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/homes/home/home.component';
import {HomeDetailComponent} from './component/homes/home-detail/home-detail.component';
import {HomeAddComponent} from './component/homes/home-add/home-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
=======
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './component/header/header.component';
>>>>>>> a2504c7d40eae8fa1c57d1c67f621d033ee339f1
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeEditComponent } from './component/homes/home-edit/home-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
<<<<<<< HEAD
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { HomeStatusComponent } from './HomeMain/home-status/home-status.component';

import { LoginComponent } from './user/login/login.component';

import { RegisterComponent } from './user/register/register.component';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import { ChangePasswordComponent } from './user/change-password/change-password.component';





=======
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { HomeStatusComponent } from './component/homes/home-status/home-status.component';
import { BookingComponent } from './component/booking/booking.component';
import { UserComponent } from './component/user/user.component';
>>>>>>> a2504c7d40eae8fa1c57d1c67f621d033ee339f1
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeAddComponent,
    HeaderComponent,
    HomeEditComponent,
    HomeStatusComponent,
<<<<<<< HEAD

    LoginComponent,

    RegisterComponent,

    ChangePasswordComponent,




=======
    BookingComponent,
    UserComponent,
>>>>>>> a2504c7d40eae8fa1c57d1c67f621d033ee339f1
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
    CKEditorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
