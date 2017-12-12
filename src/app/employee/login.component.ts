import {Component} from '@angular/core';
import {LoginService, User} from './login.service'
 
@Component({
    selector: 'login-from',
    providers: [LoginService],
    template: `
    <style>
     label { display: block; width: 100px; }

.container {
    padding: 25px;
    position: fixed;
}

h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}
.wrapper {
    text-align: center;
}
.form-login {
    background-color: #EDEDED;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    box-shadow:0 1px 0 #cfcfcf;
}

    }
    </style>
        <div class="container">
         <div class="row">
          <div class="col-sm-3">
            <div class="form-login">
               <h4> Welcome </h4>
                        <label for="email" >Email </label>
                         <input [(ngModel)]="user.email" id="email" 
                            type="email" class="validate" class="form-control input-sm chat-input" placeholder="username"  >
              <br/>
                        <label for="password">Password</label>
                         <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate" class="form-control input-sm chat-input" placeholder="password" >
             
               <br/>
               <div class="wrapper">
                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn btn-primary btn-md" 
                    type="submit" name="action">Login</button>
                    </div>
            </div>
        </div>
    	`
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}