import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTextComponent } from './search-text.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchTextComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[SearchTextComponent]
})
export class SharedModule { }
