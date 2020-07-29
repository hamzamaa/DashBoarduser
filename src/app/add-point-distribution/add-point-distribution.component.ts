import { Component, OnInit } from '@angular/core';
import { PointDistribution } from '../model/pointDistribution';
import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng-lts/components/common/messageservice';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-add-point-distribution',
  templateUrl: './add-point-distribution.component.html',
  styleUrls: ['./add-point-distribution.component.css'],
  providers: [MessageService]

})
export class AddPointDistributionComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
    this.cities = [
      { name: 'Monplaisir', code: 'Monplaisir' },
      { name: 'Centre Ville', code: 'Centre Ville' },
      { name: 'avenue Mohammed V', code: 'avenue Mohammed V' },
      { name: 'Lac 1', code: 'Lac 1' },
      { name: 'Lac2', code: 'Lac2' },
      { name: 'Lafayette', code: 'Lafayette' },
      { name: 'Barcelona', code: 'Barcelona' },
        { name: 'Beb_jdid', code: 'Beb_jdid' },

        { name: 'Beb_Souika', code: 'Beb_Souika' },

        { name: 'Station Passage', code: 'Station Passage' },

    ];
    this.ouvertureOption = [
      { name: '24/24-7/7', code: '24/24-7/7' },
      { name: 'Lundi à vendredi', code: 'Lundi à vendredi' },

    ];
  }
  title = 'ng-jspdf';
  point: PointDistribution = new PointDistribution();
  listPoint: PointDistribution[] = [];

  cities: any[];
  ouvertureOption: any[];
  pointOuverture: any;
  gouvernorat: any;
  errors = [];
  BASE_URL = 'http://localhost:4200/';





  ngOnInit() {
  }
  addProduct() {
    this.listPoint.push(this.point);
    console.log(this.listPoint);
  }
  ajouterPoint() {
    this.point.ouverture = this.pointOuverture.code;
    this.point.gouvernorat = this.gouvernorat.code;
    this.httpClient.post<PointDistribution>(this.BASE_URL + 'addPointDistribution', this.point).subscribe(
      point => {
        console.log(point);

      });
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: '', detail: 'point de distrubution ajouté avec succés' });
  }
}
