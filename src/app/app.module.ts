import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AddPointDistributionComponent } from './add-point-distribution/add-point-distribution.component';
import { Component404Component } from './component404/component404.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';



const ROUTES: Routes = [{path: 'login', component: LoginComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    AddPointDistributionComponent,
    Component404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
