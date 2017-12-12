import { Injectable } from '@angular/core';
import{IEmployee} from './employee';

@Injectable()
export class EmployeeService{
getEmployees(): IEmployee[]{
  return [
  {code:'emp01',name:'Tom',gender:'Male',Salary:'3000',dateOfBirth:'02/01/1982'},
     {code:'emp02',name:'Alex',gender:'Male',Salary:'4230',dateOfBirth:'02/01/1982'},
      {code:'emp03',name:'Mike',gender:'Male',Salary:'4500',dateOfBirth:'02/01/1982'},
       {code:'emp04',name:'Mary',gender:'Female',Salary:'4040',dateOfBirth:'02/01/1982'},
        {code:'emp05',name:'John',gender:'Male',Salary:'3400',dateOfBirth:'02/01/1982'},
         {code:'emp06',name:'Ria',gender:'Female',Salary:'3500',dateOfBirth:'02/01/1982'}

  ];

}
}