import { PointDistribution } from './pointDistribution';
import {DateReservation} from './dateReservation';

export class VeloLouer {
    id?: number;
    _point_distribution?: PointDistribution;
    date_reservation?: DateReservation;
    description?: string;
     matricule?: number;
    modele?: number;
    nombre_vitesse?: number;
    type?: string;
    taille?: string;
    tarif_par_heure?: number;
    disponible?: boolean;
    Destination?: number;
    _marque?: number;
  }
