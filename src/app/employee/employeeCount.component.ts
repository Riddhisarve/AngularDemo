import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'employee-count',
    templateUrl:'./employeeCount.component.html',
    styleUrls:['./employeeCount.component.css']
})

export class EmployeeCountComponent{
SelectedRadioButtonValue: string='All';
@Output()
CountRadioButtonSelctionChanged:EventEmitter<string>= new EventEmitter<string>();

    @Input()
    all:number;

     @Input()
    male:number;

     @Input()
    female:number;
    
    OnRadioButtonChanged(){
        this.CountRadioButtonSelctionChanged.emit(this.SelectedRadioButtonValue);
       console.log(this.SelectedRadioButtonValue);
    }

//to disable the flag using function 
//disableFlag = false;
//disableCheckBox(){
 // this.disableFlag = true;
  //setTimeout(() =>{
    //this.disableFlag = false; 
         // }, 3000);
//}
SelectedNameChangedValue: string='';
 @Output()
NameSelctionChanged:EventEmitter<string>= new EventEmitter<string>();

 @Input()
 emp01:string;

   OnTextChanged(){
        this.NameSelctionChanged.emit(this.SelectedNameChangedValue);
        console.log(this.SelectedNameChangedValue);
    }
}