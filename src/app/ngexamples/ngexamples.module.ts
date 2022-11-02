import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesContainerComponent } from './examples-container.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyInputFormatDirective } from './inputdemo.directive';
import { MyifDirective } from './myif.directive';



@NgModule({
  declarations: [
    ExamplesContainerComponent,MyInputFormatDirective, MyifDirective
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild([
      {path:"examples",component:ExamplesContainerComponent}
    ])
  ]
})
export class NgexamplesModule { }
