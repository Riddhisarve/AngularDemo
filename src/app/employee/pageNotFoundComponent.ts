import { Component } from '@angular/core';

 @Component({
  template: ` <nav>
    <a routerLink="/about-us" routerLinkActive="active">AboutUs</a>
    <a routerLink="/company-details" routerLinkActive="active">Company Details</a>
    <a routerLink="/employee-details" routerLinkActive="active">Employee Details</a>
    <a routerLink="/Other-details" routerLinkActive="active">Other Details</a>
    </nav>
    <br/>
  <h2> Page not found </h2>`
})
export class PageNotFoundComponent {}