import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:"[myInputFormatDirective]"
})
export class MyInputFormatDirective{
    @Input()
    format=""
    constructor(private el:ElementRef){
        this.el.nativeElement.style.backgroundColor='pink'
    }
    @HostListener('focus')
        handleFocus(){
            console.log("Focus..")
        }
    @HostListener('blur')
    handleBlur(){
        //console.log("Blur....")
        let val=this.el.nativeElement.value
        if(this.format== "lowercase")
        {
            this.el.nativeElement.value=val.tolowerCase()
        }else if(this.format=="uppercase"){
            this.el.nativeElement.value=val.toUpperCase()
        }
    }
}

