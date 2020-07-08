import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPointDistributionComponent } from './add-point-distribution/add-point-distribution.component';
import { AddVeloLouerComponent } from './add-velo-louer/add-velo-louer.component';

import { Component404Component } from './component404/component404.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'newPointDistribution', component: AddPointDistributionComponent },
    { path: 'newVeloLouer', component: AddVeloLouerComponent },

    { path: '**', component: HomeComponent },

]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
