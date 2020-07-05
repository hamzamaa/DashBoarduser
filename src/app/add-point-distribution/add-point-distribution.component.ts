import { Component, OnInit } from '@angular/core';
import {PointDistribution} from '../model/pointDistribution';

@Component({
  selector: 'app-add-point-distribution',
  templateUrl: './add-point-distribution.component.html',
  styleUrls: ['./add-point-distribution.component.css']
})
export class AddPointDistributionComponent implements OnInit {

  point: PointDistribution = new PointDistribution();
  cities: any[];
  ouvertureOption: any[];
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    this.ouvertureOption = [
    {name: '24/24-7/7', code: '24/24-7/7'},
    {name: 'Lundi à vendredi', code: 'Lundi à vendredi'},

];
   }

  ngOnInit() {
  }

}
