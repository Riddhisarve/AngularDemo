import {Directive, HostListener, HostBinding} from '@angular/core'
@Directive({
    selector:'[myVisibility]'
})
export class MyVisibilityDirective{
   @HostBinding("class.myvisibility")
    IsFocused:boolean = false;
    @HostListener('mouseenter')
    OnFocus():void{
        this.IsFocused = true;
    }
    @HostListener('mouseleave')
    OnFocusOut():void{
        this.IsFocused = false;
    }
}
