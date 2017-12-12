import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'aboutus-Details',
    templateUrl:'./aboutUs.component.html',
    styleUrls:['./aboutUs.component.css']
})

export class AboutUsComponent {
  goToUrl(): void {
     window.open("http://www.google.com/", "_blank");
  }
}