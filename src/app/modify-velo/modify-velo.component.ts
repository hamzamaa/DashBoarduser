import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng-lts/api';
import { ApiService } from '../services-api/api.service';
import {VeloLouer} from '../model/veloLouer';

@Component({
    selector: 'app-modify-velo',
    templateUrl: './modify-velo.component.html',
    styleUrls: ['./modify-velo.component.css'],
    providers: [MessageService]

})
export class ModifyVeloComponent implements OnInit {

    constructor(private messageService: MessageService, private apiService: ApiService) { }

    VeloLouers: VeloLouer[] = [];


    clonedVeloLouers: { [s: string]: VeloLouer; } = {};
    title = 'ng-jspdf';
    velo: VeloLouer = new VeloLouer();
    Marques :any[];
    types: any[];
    type: any;
    taille: any;
    description: any;
    modele: any;
    marque: any;
    PointDistribution: any[];
    matricule: any[];
    modeles: any[];
    tarif_par_heure: any[];
    tailles: any[];
    disponible: any[];
    Destination: any[];
    _marque: any[];
    nombre_vitesse: any;
    errors = [];
    pointList
    ngOnInit() {
        this.apiService.getAllVelo().subscribe(VeloLouer => {
            this.VeloLouers = VeloLouer;
            console.log(this.VeloLouers);
        });
        this.apiService.getAllPoint().subscribe(pointList =>{
            this.PointDistribution =pointList;
        })
        this.types = [
            { name: 'Vélo Electrique', code: 'Vélo Electrique' },
            { name: 'Vélo de Route', code: 'Vélo de Route' },
            { name: 'Vélo Tout Urbain', code: 'Vélo Tout Urbain' },
            { name: 'Vélo Ecole ', code: 'Vélo Ecole' },
            { name: 'cyclocross-gravel-bike', code: 'cyclocross-gravel-bike' },
            { name: 'couché ', code: 'couché ' },
            { name: 'Remorque ', code: 'Remorque ' },

        ];
        this.Marques = [
            { name: 'CUBE', code: 'CUBE' },
            { name: 'ORTLER', code: 'ORTLER' },
            { name: 'ORBEA', code: 'ORBEA' },
            { name: 'HAIBIKE', code: 'HAIBIKE' },
            { name: 'GHOST', code: 'GHOST' },
            { name: 'SANTACRUZ ', code: 'SANTACRUZ ' },
            { name: 'FOCUS ', code: 'FOCUS ' },
            { name: 'BIANCHI ', code: 'BIANCHI ' },
            { name: 'VERMONT ', code: 'VERMONT ' },

        ];
        this.modeles = [
            { name: 'STERO HYBRID', code: 'STERO HYBRID' },
            { name: 'REACTION HYBRID', code: 'REACTION HYBRID' },
            { name: 'NYTRO ULTEGRA', code: 'NYTRO ULTEGRA' },
            { name: 'EMONDA SL 6', code: 'EMONDA SL 6' },
            { name: 'EMONDA SL 7', code: 'EMONDA SL 7' },
            { name: 'CHAMELON 7 C R+', code: 'CHAMELON 7 C R+ ' },
            { name: 'SUPERCALIBER ', code: 'SUPERCALIBER ' },

        ];

        this.tailles = [
            { name: 'Petit', code: 'Petit' },
            { name: 'Moyen', code: 'Moyen' },
            { name: 'Grand', code: 'Grand' },
            { name: 'Professionnel', code: 'Professionnel' },
        ];
    }
    onRowEditInit(veloLouers: VeloLouer) {
        this.clonedVeloLouers[veloLouers.id] = { ...veloLouers };
    }

    onRowEditSave(VeloLouers: VeloLouer) {

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'velo is updated' });
        console.log(VeloLouer);
        this.apiService.updateVelo(VeloLouers).subscribe(item => {
            console.log('modified Successfuly');

        });

    }

    onRowEditCancel(VeloLouers: VeloLouer, index: number) {
    }

    modifyPointDistribution(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element._point_distribution = event.value;
            }
        });
    }

    modifyGouvernant(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.matricule = event.value.code;
            }
        });
    }

    modifymodele(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.modele = event.value.code;
            }
        });
    }
    modifynombreVitesse(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.nombre_vitesse = event.value.code;
            }
        });
    }
    modifytype(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.type = event.value.code;
            }
        });
    }

    modifydescription(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.type = event.value.code;
            }
        });
    }



    modifytaille(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.taille = event.value.code;
            }
        });
    }
    modifytarifParHeure(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.tarif_par_heure = event.value.code;
            }
        });
    }
    modifydisponible(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.disponible = event.value.code;
            }
        });
    }
    modifydestination(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element.Destination = event.value.code;
            }
        });
    }
    modifymarque(rowData, event) {
        this.VeloLouers.forEach(element => {
            if (element.id == rowData.id) {
                element._marque = event.value.code;
            }
        });
    }
}
