import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VeloLouer } from '../model/veloLouer';
import { Observable } from 'rxjs';
import { PointDistribution } from '../model/pointDistribution';
import {User} from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:4200/';
  connected; boolean=true;

  constructor(private httpClient: HttpClient) { }



  addVelo(velo): Observable<any> {
    return this.httpClient.post<VeloLouer>(this.BASE_URL + 'addVeloAction', velo);
  }

  deletePoint(id): Observable<any> {
    return this.httpClient.get<PointDistribution>
      (this.BASE_URL + 'deletePointDistribution/' + id);
  }


    recupereUser(id){
        return this.httpClient.get<User>
        (this.BASE_URL + 'getOneUserAction/' + id);
    }



    getAllPoint(): Observable<PointDistribution[]> {
    return this.httpClient.get<PointDistribution[]>
      (this.BASE_URL + 'getAllLPoint');
  }
    getAllVelo(): Observable<VeloLouer[]> {
        return this.httpClient.get<VeloLouer[]>
        (this.BASE_URL + 'getAllLVelot');
    }
    deleteVelo(id): Observable<any> {
        return this.httpClient.get<VeloLouer>
        (this.BASE_URL + 'deleteVeloAction/' + id);
    }
    updatePoint(point): Observable<any> {
      return this.httpClient.put<PointDistribution>(this.BASE_URL + 'updategetPointDistribution/' + point.id, point);
    }

    updateVelo(velo): Observable<any> {
        return this.httpClient.put<VeloLouer>(this.BASE_URL + 'updategetVeloAction/' + velo.id, velo);
    }

    login(user): Observable<any> {
        return this.httpClient.get<User>
        (this.BASE_URL + 'loginAction/' + user.login+'/'+user.password);
    }

    louer(id,velo): Observable<any> {
        return this.httpClient.put<VeloLouer>(this.BASE_URL + 'louerVeloAction/' + id,JSON.stringify(velo));
    }


    setConnectedTrue(){
      this.connected=true;
}

    setConnectedFalse(){
        this.connected=false;
    }

getConnected():boolean{
      return this.connected;
}

    getVelo(id){
        return this.httpClient.get<VeloLouer>
        (this.BASE_URL + 'getOneVeloAction/' + id);
    }
}
