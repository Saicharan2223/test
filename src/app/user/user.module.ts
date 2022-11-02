import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud.component';
import {Routes, RouterModule} from '@angular/router'
import { PersonComponent } from '../person/person.component';
import { SharedModule } from '../shared/shared.module';

const crudRoutes:Routes=[{
path:"crud",component:CrudComponent,children:[{path:"users",component:UserComponent},{path:"persons",component:PersonComponent},{path:"",redirectTo:"users",pathMatch:"full"}]
}]
@NgModule({
  declarations: [
    UserComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule, FormsModule,RouterModule.forChild(crudRoutes),SharedModule
  ],
  exports:[UserComponent]
})
export class UserModule { 
  constructor()
  {
    console.log("User Module constructed...")
  }
}
