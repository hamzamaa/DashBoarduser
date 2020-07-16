import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services-api/api.service';
import { MessageService, Message } from 'primeng-lts/api';
import {VeloLouer} from '../model/veloLouer';

@Component({
    templateUrl: './affichage-list-velo.component.html',
    styleUrls: ['./affichage-list-velo.component.css'],
    providers: [MessageService]

})
export class AffichageListVeloComponent implements OnInit {
    velos: VeloLouer[];
    cols: any[];
    BASE_URL = 'http://localhost:4200/';
    msgs: Message[] = [];

    constructor(private apiservice: ApiService, private httpClient: HttpClient, private messageService: MessageService) {

    }

    ngOnInit() {
        this.httpClient.get<VeloLouer[]>(this.BASE_URL + 'getAllLVelot').subscribe(
            velos => {
                this.velos = velos;

            });

        this.cols = [
            { field: 'pointDistribution', header: 'Point' },
            { field: 'matricule', header: 'Matricule' },
            { field: 'modele', header: 'Modele' },
            { field: 'nombreVitesse', header: 'NbVitesse' },
            { field: 'type', header: 'Type' },
            { field: 'taille', header: 'Taille' },
            { field: 'tarifParHeure', header: 'TarifParH' },
            { field: 'disponible', header: 'disponible' },
            { field: 'marque', header: 'marque' },


        ];
    }
    modifyVelo() {
        console.log('modified successfully');
    }

    removeVelo(id) {
        console.log(event);
        this.apiservice.deleteVelo(id).subscribe(item => {
            console.log('removed successfully');
            complete : {
                this.msgs.push({severity: 'error', summary: '', detail: 'velo removed successfully'});


                this.httpClient.get<VeloLouer[]>(this.BASE_URL + 'getAllLVelot').subscribe(
                    velos => {
                        this.velos = velos;

                    });
            }
        });
    }

}
