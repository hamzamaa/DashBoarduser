import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services-api/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {Sidebar} from 'primeng-lts/primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:User
    error:boolean=false
    connected; boolean;

    constructor(private apiservice: ApiService,private router:Router) { }

  ngOnInit(){
        this.user=new User()
      this.connected=  this.apiservice.getConnected();

  }
    signIn() {

        this.apiservice.login(this.user).subscribe(
            (data )=> {
                this.error=false
                this.apiservice.setConnectedTrue();


                localStorage.setItem('user',"1");

              //window.location.href='/PointVeloList';
                this.router.navigate(['/PointVeloList']);

           },(err:HttpErrorResponse)=>{
             if(err.status===401) {

                    this.error=true
                }
            } );
               }
}
