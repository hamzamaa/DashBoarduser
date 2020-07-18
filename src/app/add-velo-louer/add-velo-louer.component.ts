import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng-lts/components/common/messageservice';
import { VeloLouer } from '../model/veloLouer';
import { PointDistribution } from '../model/pointDistribution';
import { ApiService } from '../services-api/api.service';
import { Message } from 'primeng-lts/api';

@Component({
    selector: 'app-add-velo-louer',
    templateUrl: './add-velo-louer.component.html',
    styleUrls: ['./add-velo-louer.component.css'],
    providers: [MessageService]

})
export class AddVeloLouerComponent implements OnInit {
    selectedFile: File = null;
    constructor(private apiservice: ApiService, private messageService: MessageService) {
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
    title = 'ng-jspdf';
    velo: VeloLouer = new VeloLouer();
    listvelo: VeloLouer[] = [];
    points: PointDistribution[] =[];
    msgs: Message[] = [];

    types: any[];
    type: any;
    taille: any;
    modele: any;
    marque: any;
    point: any;
    PointDistribution: any[];
    matricule: any[];
    modeles: any[];
    tarifParHeure: any[];
    tailles: any[];
    disponible: any[];
    Destination: any[];
    Marques: any[];
    nombreVitesse: any[];
    errors = [];
    BASE_URL = 'http://localhost:4200/';
    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
    }


    ngOnInit() {
        this.apiservice.getAllPoint().subscribe(item =>{
            this.points = item ;
            console.log(this.points)
        })
    }

    ajouterVelo() {
        this.velo.type = this.type.code;
        this.velo._marque = this.marque.code;
        this.velo.modele = this.modele.code;
        this.velo.taille = this.taille.code;
        this.velo._point_distribution = this.point;
        this.velo.disponible = true;
        this.apiservice.addVelo(this.velo).subscribe(
            point => {
                console.log(point);
             } );
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '', detail: 'Vélo ajouté avec succés' });            }

    }

