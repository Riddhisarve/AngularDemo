import { Component } from '@angular/core';
//import {AfteLogin} from './employee/afterLogin.component';
//import {LoginComponent} from './employee/login.component';
import {LoginService} from './employee/login.service';

@Component({
  selector: 'my-app',
  providers:[LoginService],
  template: `
   <h1>{{pageHeader}}</h1>
    <br/>

    <div *ngIf="showComponent">
    <a (click)="logout()" href="#"> Click here to LogOut </a>
    </div>

   <!-- <nav>
    <a routerLink="/about-us" routerLinkActive="active">AboutUs</a>
    <a routerLink="/company-details" routerLinkActive="active">Company Details</a>
    <a routerLink="/employee-details" routerLinkActive="active">Employee Details</a>
    <a routerLink="/Other-details" routerLinkActive="active">Other Details</a>
    </nav>-->

    <br/> 
    <router-outlet></router-outlet>
   
   <!--<div>
    <my-employee></my-employee>
     <button [disabled]= isDisable >Click me </button>
    <list-employee></list-employee>
   </div>-->
  `,
  
})
export class AppComponent {
  pageHeader : string ="Millenium";
 // isDisable: boolean=true;
  showComponent:boolean=true;

  //if (this.routerLink='AppComponent')
 // {
   // this.showComponent=true;
  //}

  constructor( private _loginservice:LoginService){
    }

    ngOnInit(){
        this._loginservice.checkCredential();
    }

    logout(){
        this._loginservice.logout();
    }
}
