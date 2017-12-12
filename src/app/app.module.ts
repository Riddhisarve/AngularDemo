import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {appRoutes} from './app.route';

import { AppComponent }  from './app.component';
import { EmployeeComponent }  from './employee/employee.component';
import { EmployeeListComponent }  from './employee/employeeList.component';
import {EmployeeTitlePipe} from './employee/emloyeeTitle.pipe';
import {EmployeeCountComponent} from './employee/employeeCount.component';
import {PageNotFoundComponent} from './employee/pageNotFoundComponent';
import {CompanyComponent} from './employee/company.component';
import {AboutUsComponent} from './employee/aboutUs.component'; 
import {MyVisibilityDirective} from './employee/myVisibility.directive'; 
import {LoginComponent} from './employee/login.component';
import {AfteLogin} from './employee/afterLogin.component';
//const appRoutes: Routes=[
//{path: 'employee-details',component: EmployeeListComponent},
//{path: 'company-details',component: CompanyComponent},
//{path: 'about-us',component: AboutUsComponent},
//{path:'**',component:PageNotFoundComponent }
//];

@NgModule({
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(
       appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe,EmployeeCountComponent,PageNotFoundComponent,
    CompanyComponent,AboutUsComponent,MyVisibilityDirective,LoginComponent,AfteLogin
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

