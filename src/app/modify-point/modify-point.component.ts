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