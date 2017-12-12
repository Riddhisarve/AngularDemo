import { Component } from '@angular/core';

@Component({
    selector:'my-company',
    templateUrl:'./company.component.html',
    styleUrls: ['./company.component.css']
})

export class CompanyComponent{
    companyName:string ="Millenium Software";
    location : string = "cityName";
    businessAddress: string ="Street Address";
    email: string= "abc.millenium.com";
    Tel:string="555-666-9999";
    fax: string = "111-111-1121";
    primaryLineOfBusiness:string= "Information Technology";
    parentOrganization: string= "If applicable";
    additionalInformation: string="Additional information about the size of the employer and any associated corporate parent company information, if applicable.";
    
    showDetails:boolean=false;

    toggleDetails(): void{
   this.showDetails=!this.showDetails;
    }

}