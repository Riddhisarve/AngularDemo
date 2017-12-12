import{Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
    selector:'login-form',
    providers:[LoginService],
    template:   ` <div class="">

    <div class="content">
    <span> Congratulations, you have successfully logged in !! </span>
    <br/>
   
    <nav>
    <a routerLink="/about-us" routerLinkActive="active">AboutUs</a>
    <a routerLink="/company-details" routerLinkActive="active">Company Details</a>
    <a routerLink="/employee-details" routerLinkActive="active">Employee Details</a>
    <a routerLink="/Other-details" routerLinkActive="active">Other Details</a>
    </nav>
     
    <br/> 
 </div>  
    `
})

export class AfteLogin{

    constructor( private _loginservice:LoginService){
    }

    ngOnInit(){
        this._loginservice.checkCredential();
    }

    logout(){
        this._loginservice.logout();
    }
}
