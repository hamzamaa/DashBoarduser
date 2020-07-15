import { Component, OnInit } from '@angular/core';
import {VeloLouer} from '../model/veloLouer';
import { SelectItem, MessageService } from 'primeng-lts/api';
import { ApiService } from '../services-api/api.service';

@Component({
    selector: 'app-modify-point',
    templateUrl: './modify-velo.component.html',
    styleUrls: ['./modify-velo.component.css'],
    providers: [MessageService]

})
export class ModifyVeloComponent implements OnInit {

    velos: VeloLouer[] = [];

    ouvertureOption: any[];


    clonedVelos: { [s: string]: VeloLouer[]; } = {};

    constructor(private messageService: MessageService, private apiService: ApiService) {
    }

    ngOnInit() {

    }

}
