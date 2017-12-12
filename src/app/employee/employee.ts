export interface IEmployee{
    code:string;
    name:string;
    gender:string;
    Salary:string;
    dateOfBirth:string;
    department?:string; //optional property

    //computeMonthlySalary(Salary:number):number;
}

export class Employee implements IEmployee{
   constructor( public code:string,
   public name:string,
   public gender:string,
   public Salary:string,
   public dateOfBirth:string){
   }
//computeMonthlySalary(Salary:number):number{
  //  return Salary*12;
//}
}