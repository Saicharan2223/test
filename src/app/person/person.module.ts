import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule, FormsModule,SharedModule
  ],
  exports:[PersonComponent]
})
export class PersonModule { }