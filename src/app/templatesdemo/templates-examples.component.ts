import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { DateViewerComponent } from './date-viewer.component';

@Component({
  selector: 'templates-examples',
  templateUrl: './templates-examples.component.html',
  styles: [
  ]
})
export class TemplatesExamplesComponent implements OnInit,AfterViewInit {
  @ViewChild("dv")
  dViewer:DateViewerComponent=new DateViewerComponent()

  @ViewChild("h")
  myHeading:ElementRef={}as ElementRef
  clients=[
    {name:"Arun",paid:true,amouint:10},
    {name:"Krish",paid:false,amouint:300},
    {name:"Akhil",paid:false,amouint:150},
    {name:"Nayan",paid:true,amouint:340}
  
  
  ]
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.myHeading.nativeElement.innerHTML)
  }

  ngOnInit(): void {
    console.log(this.dViewer.today)
    //console.log(this.myHeading.nativeElement.innerHTML)
  }

}
