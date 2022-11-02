import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesExamplesComponent } from './templates-examples.component';
import { DateViewerComponent } from './date-viewer.component';



@NgModule({
  declarations: [
    TemplatesExamplesComponent,
    DateViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TemplatesExamplesComponent]
})
export class TemplatesdemoModule {
  constructor(){
    console.log("Template Demo module Constructed")
  }
 }
