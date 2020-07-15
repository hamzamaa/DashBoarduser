import { Component, OnInit } from '@angular/core';
import { PointDistribution } from '../model/pointDistribution';
import { SelectItem, MessageService } from 'primeng-lts/api';
import { ApiService } from '../services-api/api.service';

@Component({
  selector: 'app-modify-point',
  templateUrl: './modify-point.component.html',
  styleUrls: ['./modify-point.component.css'],
  providers: [MessageService]

})
export class ModifyPointComponent implements OnInit {

  PointDistributions: PointDistribution[] = [];

  ouvertureOption: any[];
  cities:any[];
  ouverture: any;


  clonedPointDistributions: { [s: string]: PointDistribution; } = {};

  constructor(private messageService: MessageService, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllPoint().subscribe(PointDistribution => {
      this.PointDistributions = PointDistribution
      console.log(this.PointDistributions)
    });

    this.ouvertureOption = [
      { name: '24/24-7/7', code: '24/24-7/7' },
      { name: 'Lundi à vendredi', code: 'Lundi à vendredi' },

    ];
    this.cities = [
      { name: 'Ariana', code: 'Ariana' },
      { name: 'Béja', code: 'Béja' },
      { name: 'Ben Arous', code: 'Ben Arous' },
      { name: 'Bizerte', code: 'Bizerte' },
      { name: 'Gabès', code: 'Gabès' },
      { name: 'Bizerte', code: 'Bizerte' },
      { name: 'Gafsa', code: 'Gafsa' },
      { name: 'Jendouba', code: 'Jendouba' },
      { name: 'Kairouan', code: 'Kairouan' },
      { name: 'Kasserine', code: 'Kasserine' },
      { name: 'Kébili', code: 'Kébili' },
      { name: 'Le Kef', code: 'Le Kef' },
      { name: 'Mahdia', code: 'Mahdia' },
      { name: 'La Manouba', code: 'La Manouba' },
      { name: 'Médenine', code: 'Médenine' },
      { name: 'Monastir', code: 'Monastir' },
      { name: 'Nabeul', code: 'Nabeul' },
      { name: 'Sfax', code: 'Sfax' },
      { name: 'Sidi Bouzid', code: 'Sidi Bouzid' },
      { name: 'Siliana', code: 'Siliana' },
      { name: 'Sousse', code: 'Sousse' },
      { name: 'Tataouine', code: 'Tataouine' },
      { name: 'Tozeur', code: 'Tozeur' },
      { name: 'Tunis', code: 'Tunis' },
      { name: 'Zaghouan', code: 'Zaghouan' },

    ];
  }

  onRowEditInit(pointDistribution: PointDistribution) {
    this.clonedPointDistributions[pointDistribution.id] = { ...pointDistribution };
  }

  onRowEditSave(PointDistribution: PointDistribution) {

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
    console.log(PointDistribution)
    this.apiService.updatePoint(PointDistribution).subscribe(item => {
      console.log("modified Successfuly")

    })

  }

  onRowEditCancel(PointDistribution: PointDistribution, index: number) {
  }

  modifyOuverture(rowData, event) {
    this.PointDistributions.forEach(element => {
      if (element.id == rowData.id) {
        element.ouverture = event.value.code;
      }
    });
  }

  modifyGouvernant(rowData, event) {
    this.PointDistributions.forEach(element => {
      if (element.id == rowData.id) {
        element.gouvernorat = event.value.code;
      }
    });
  }

}