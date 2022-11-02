import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective {
vIf:boolean=false;

  constructor(private vRef:ViewContainerRef,private tRef:TemplateRef<any>) { }
  @Input()
  set appMyIf(condition:any){
    this.vIf=condition
    this.updateView()
  }
  updateView(){
    if(this.vIf){
      this.vRef.createEmbeddedView(this.tRef)

    }else{
      this.vRef.clear
    }
  }
}
