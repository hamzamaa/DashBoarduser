import { Component, OnInit } from '@angular/core';
import { PointDistribution } from '../model/pointDistribution';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng-lts/components/common/messageservice';
import * as jsPDF from 'jspdf' ;
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-add-point-distribution',
  templateUrl: './add-point-distribution.component.html',
  styleUrls: ['./add-point-distribution.component.css'],
  providers: [MessageService]

})
export class AddPointDistributionComponent implements OnInit {
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
  title = 'ng-jspdf' ;
  point: PointDistribution = new PointDistribution();
  listPoint: PointDistribution[] = [];

  cities: any[];
  ouvertureOption: any[];
  pointOuverture: any;
  gouvernorat: any;
  errors = [];
  BASE_URL = 'http://localhost:4200/';








  downloadPDF() {
 console.log('downloadinf pdf..');
 const doc = new jsPDF();
 doc.text('Facture de Location', 80, 10);
 doc.text('Nom', 15, 50);

 doc.text('Prenom', 15, 60);

 doc.text('Date', 15, 70);

 doc.save('facture.pdf');

  }

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
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'point distrubition submitted' });
      }
    );
  }
}
