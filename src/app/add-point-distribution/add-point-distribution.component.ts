import { Component, OnInit } from '@angular/core';
import { PointDistribution } from '../model/pointDistribution';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng-lts/components/common/messageservice';

@Component({
  selector: 'app-add-point-distribution',
  templateUrl: './add-point-distribution.component.html',
  styleUrls: ['./add-point-distribution.component.css'],
  providers: [MessageService]

})
export class AddPointDistributionComponent implements OnInit {

  point: PointDistribution = new PointDistribution();
  listPoint: PointDistribution[] = [];

  cities: any[];
  ouvertureOption: any[];
  pointOuverture: any;
  gouvernorat: any;
  errors = [];
  BASE_URL = "http://localhost:4200/"
  constructor(private httpClient: HttpClient, private messageService: MessageService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.ouvertureOption = [
      { name: '24/24-7/7', code: '24/24-7/7' },
      { name: 'Lundi à vendredi', code: 'Lundi à vendredi' },

    ];
  }

  ngOnInit() {
  }
  addProduct() {
    this.listPoint.push(this.point);
    console.log(this.listPoint);
  }
  ajouterPoint() {
    this.point.ouverture = this.pointOuverture.code;
    this.point.gouvernorat = this.gouvernorat.code
    this.httpClient.post<PointDistribution>(this.BASE_URL + 'addPointDistribution', this.point).subscribe(
      point => {
        console.log(point);
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'point distrubition submitted' });
      }
    )
  }
}
