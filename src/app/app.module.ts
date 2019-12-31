import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './HomeMain/home/home.component';
import {HomeDetailComponent} from './HomeMain/home-detail/home-detail.component';
import {HomeAddComponent} from './HomeMain/home-add/home-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {GuardComponent} from './guard/guard.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeEditComponent } from './HomeMain/home-edit/home-edit.component';
import { FontendComponent } from './fontend/fontend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeAddComponent,
    HeaderComponent,
    GuardComponent,
    HomeEditComponent,
    FontendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
