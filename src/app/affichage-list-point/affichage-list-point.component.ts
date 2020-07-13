import { Component, OnInit } from '@angular/core';
import { PointDistribution } from '../model/pointDistribution';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services-api/api.service';
import { MessageService, Message } from 'primeng-lts/api';

@Component({
  selector: 'app-affichage-list-point',
  templateUrl: './affichage-list-point.component.html',
  styleUrls: ['./affichage-list-point.component.css'],
  providers: [MessageService]

})
export class AffichageListPointComponent implements OnInit {
  points: PointDistribution[];
  cols: any[];
  BASE_URL = 'http://localhost:4200/';
  msgs: Message[] = [];

  constructor(private apiservice: ApiService,private httpClient: HttpClient,private messageService: MessageService) { 

  }

  ngOnInit() {
    this.httpClient.get<PointDistribution[]>(this.BASE_URL + 'getAllLPoint').subscribe(
      points => {
        this.points =points

      });

    this.cols = [
      { field: 'nom', header: 'Nom' },
      { field: 'adresse', header: 'Adresse' },
      { field: 'ouverture', header: 'Ouverture' },
      { field: 'capacite', header: 'Capacite' },
      { field: 'gouvernorat', header: 'Gouvernorat' },
      { field: 'id', header: 'Id' },


  ];
  }
 modifyPoint(){
   console.log("modified successfully")
 }

 removePoint(id){
   console.log(event)
  this.apiservice.deletePoint(id).subscribe(item => {
    console.log("removed successfully")
    complete : {
        this.msgs.push({severity:'error', summary:'', detail:'Point removed successfully'});

    
      this.httpClient.get<PointDistribution[]>(this.BASE_URL + 'getAllLPoint').subscribe(
        points => {
          this.points =points
  
        });
    }
  })
}
 
}
