import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VeloLouer } from '../model/veloLouer';
import { Observable } from 'rxjs';
import { PointDistribution } from '../model/pointDistribution';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:4200/';

  constructor(private httpClient: HttpClient) { }



  addVelo(velo): Observable<any> {
    return this.httpClient.post<VeloLouer>(this.BASE_URL + 'addVeloAction', velo);
  }

  deletePoint(id): Observable<any> {
    return this.httpClient.get<PointDistribution>
      (this.BASE_URL + 'deletePointDistribution/' + id);
  }

  getAllPoint(): Observable<PointDistribution[]> {
    return this.httpClient.get<PointDistribution[]>
      (this.BASE_URL + 'getAllLPoint');
  }
}