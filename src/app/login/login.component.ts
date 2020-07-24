import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services-api/api.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:User
    error:boolean=false

    constructor(private apiservice: ApiService,private router:Router) { }

  ngOnInit(){
        this.user=new User()

  }
    signIn() {

        this.apiservice.login(this.user).subscribe(
            (data )=> {
                this.error=false
                localStorage.setItem('user', data);

                this.router.navigate(['/newPointDistribution']);




            },(err:HttpErrorResponse)=>{
             if(err.status===401) {

                    this.error=true
                }
            } );
               }
}
