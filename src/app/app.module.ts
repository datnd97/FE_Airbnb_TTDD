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
import {BookingComponent} from './component/booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './component/carousel/carousel.component';
import { UserListComponent } from './user/component/user-list/user-list.component';

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
    CarouselComponent,
    UserListComponent,

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
export class AppModule {
}
