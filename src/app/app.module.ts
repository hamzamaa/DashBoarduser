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
import {ToastModule} from 'primeng/toast';
import { AddVeloLouerComponent } from './add-velo-louer/add-velo-louer.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AffichageListPointComponent } from './affichage-list-point/affichage-list-point.component';
import {TableModule} from 'primeng/table';
import { ModifyPointComponent } from './modify-point/modify-point.component';
import { AffichageListVeloComponent } from './affichage-list-velo/affichage-list-velo.component';
import { ModifyVeloComponent } from './modify-velo/modify-velo.component';
import {BikeCardComponent} from './bike-card/bike-card.component';
import { LouerVeloComponent } from './louer-velo/louer-velo.component';
import {CalendarModule} from 'primeng/calendar';




const ROUTES: Routes = [{path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    AddPointDistributionComponent,
    Component404Component,
    HomeComponent,
    AddVeloLouerComponent,
    AffichageListPointComponent,
    ModifyPointComponent,
    AffichageListVeloComponent,
    ModifyVeloComponent,
      BikeCardComponent,
      LouerVeloComponent,

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
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TableModule,
      CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
