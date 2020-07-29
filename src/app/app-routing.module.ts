import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPointDistributionComponent } from './add-point-distribution/add-point-distribution.component';
import { AddVeloLouerComponent } from './add-velo-louer/add-velo-louer.component';

import { Component404Component } from './component404/component404.component';
import { HomeComponent } from './home/home.component';
import { AffichageListPointComponent } from './affichage-list-point/affichage-list-point.component';
import { ModifyPointComponent } from './modify-point/modify-point.component';
import {AffichageListVeloComponent} from './affichage-list-velo/affichage-list-velo.component';
import {ModifyVeloComponent} from './modify-velo/modify-velo.component';
import {LoginComponent} from './login/login.component';
import {LouerVeloComponent} from './louer-velo/louer-velo.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },

    { path: 'newPointDistribution', component: AddPointDistributionComponent },
  { path: 'PointDistributionList', component: AffichageListPointComponent },
    { path: 'PointVeloList', component: AffichageListVeloComponent },
  { path: 'modifyPointDistribution', component: ModifyPointComponent },
    { path: 'modifyVeloLouer', component: ModifyVeloComponent },
    { path: 'affichage', component: AffichageListVeloComponent },
    { path: 'affichageVelo', component: AffichageListVeloComponent },
    { path: 'louer/:id', component: LouerVeloComponent },




    { path: 'newVeloLouer', component: AddVeloLouerComponent },

    { path: '**', component: LoginComponent },

]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
