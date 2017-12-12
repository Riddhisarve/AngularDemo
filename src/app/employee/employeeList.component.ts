import { Component,OnInit } from '@angular/core';
import{IEmployee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'list-employee',
  templateUrl:'./employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
  providers:[EmployeeService] //use to register employee service 
})

export class EmployeeListComponent implements OnInit {
  employees:IEmployee[];
  selectedEmployeeCountRadioButton:string="All"  
  selectedEmployeeName:string="All" 
  
constructor(public _employeeService:EmployeeService) {//constructor use to initialise the class and its subclasses and use to inject our service to class components
//this.employees = this._employeeService.getEmployees();
}

ngOnInit(){ //called after after constructor and perform taks like angular binding and hence right place to call the service method
  this.employees = this._employeeService.getEmployees();
}

getTotalEmployeesCount():number{
return this.employees.length;
}

getTotalMaleEmployeesCount():number{
return this.employees.filter(e=>e.gender==="Male").length;
}
getTotalFemaleEmployeeCount(): number{
return this.employees.filter(e=>e.gender==="Female").length;
}

getTotalEmployeeCountbycode(): number{
return this.employees.filter(e=>e.code==="emp01").length;
}

OnEmployeeCountRadioButtonChanged(SelectedRadioButtonValue:string): void{
 this.selectedEmployeeCountRadioButton=SelectedRadioButtonValue
}

OnEmployeeNameChanged(SelectedNameChangedValue:string): void{
 this.selectedEmployeeName=SelectedNameChangedValue
}

}