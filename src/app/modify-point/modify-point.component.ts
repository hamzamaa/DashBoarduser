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


  clonedPointDistributions: { [s: string]: PointDistribution; } = {};

  constructor(private messageService: MessageService, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllPoint().subscribe(PointDistribution =>{
       this.PointDistributions= PointDistribution
      console.log(this.PointDistributions)});

       this.ouvertureOption = [
        { name: '24/24-7/7', code: '24/24-7/7' },
        { name: 'Lundi à vendredi', code: 'Lundi à vendredi' },
  
      ];
  }

  onRowEditInit(pointDistribution: PointDistribution) {
    this.clonedPointDistributions[pointDistribution.id] = { ...pointDistribution };
  }

  onRowEditSave(PointDistribution: PointDistribution) {

      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
 
  }

  onRowEditCancel(PointDistribution: PointDistribution, index: number) {
  }

}