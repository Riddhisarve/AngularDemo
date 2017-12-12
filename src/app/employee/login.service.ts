import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

export class User{
  constructor(
        public email:string,
        public password:string){
        }
}
var users=[ 
    new User('admin@millenium.com','abc123'),
    new User ('admin@millenium.com','abc321')
];
@Injectable()
export class LoginService{
    constructor(private _router:Router){
    }

    logout(){
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

  login(user){
  var authenticatedUser = users.find (u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      localStorage.set
      this._router.navigate(['/home']);      
      return true;
    }
    return false;
 
  }
  checkCredential(){
      if (localStorage.getItem("user") === null){
          this._router.navigate(['Login']);
      }
  }
}

