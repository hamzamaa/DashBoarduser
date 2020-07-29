import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services-api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private connected: boolean;

  constructor(private  apiService:ApiService) { }

  ngOnInit() {
this.checkConnected();
      console.log(this.connected);
  }

    checkConnected():boolean{
      if(localStorage.length===0){
          return false ;
      }
      return true ;
}

}
