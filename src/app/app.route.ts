import {Routes,RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './employee/pageNotFoundComponent';
import {CompanyComponent} from './employee/company.component';
import {AboutUsComponent} from './employee/aboutUs.component'; 
import { EmployeeListComponent }  from './employee/employeeList.component'
import {LoginComponent} from './employee/login.component'
import {AfteLogin} from './employee/afterLogin.component';
import { AppComponent }  from './app.component';

export const appRoutes: Routes=[
//{ path: '/Login', component: LoginComponent, useAsDefault:true },
{path: '', component: LoginComponent },
{path: 'Login', component: LoginComponent },
{path: 'employee-details',component: EmployeeListComponent},
{path: 'company-details',component: CompanyComponent},
{path: 'about-us',component: AboutUsComponent},
{path: 'home',component: AfteLogin },
{path:'**',component:PageNotFoundComponent }
];
