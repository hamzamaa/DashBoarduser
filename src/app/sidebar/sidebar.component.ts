import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../services-api/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router ,private serviceApi: ApiService) { }
  connected: boolean ;

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
  logout()
  {

      localStorage.removeItem("user");
      localStorage.clear();
      this.serviceApi.setConnectedFalse();
     // this.router.navigate(['/login'])
      window.location.href='/login';


  }
  public reload(){
      this.ngOnInit();
  }

}
