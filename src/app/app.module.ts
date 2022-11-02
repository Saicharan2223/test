import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { CounterModule } from "./counter/counter.module"

import { UserModule } from "./user/user.module";
import { EmployeeComponent } from './employee/employee.component'
import { PersonModule } from "./person/person.module";
import { TemplatesdemoModule } from "./templatesdemo/templatesdemo.module";
import { HomeComponent, NotFoundComponent } from "./menulinks.components";
import { Routes,RouterModule } from "@angular/router";
import { ErrorComponent } from './auth/error.component';
import { VideoDemoComponent } from './video-demo.component';
import { NgexamplesModule } from "./ngexamples/ngexamples.module";
import { PipedemoPipe } from './pipes/pipedemo.pipe';
import { PipedemoComponent } from './pipes/pipedemo.component';
//import { PipedemoModule } from "./pipes/pipedemo.module";
let appRoutes:Routes=[{path:"home",component:HomeComponent},{path:"",redirectTo:"home",pathMatch:"full"},{path:"admin",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},{path:"**",component:NotFoundComponent}]
@NgModule({
    imports: [BrowserModule,CounterModule,PersonModule,TemplatesdemoModule,RouterModule.forRoot(appRoutes),NgexamplesModule,RouterModule.forRoot([
        {path:"pipeexamples",component:PipedemoComponent}
      ])],
    declarations:[AppComponent, EmployeeComponent,HomeComponent,NotFoundComponent, ErrorComponent, VideoDemoComponent,PipedemoComponent],
    bootstrap:[AppComponent]
})
export class AppModule{
    constructor()
    {
        console.log("App Module Constructed...")
    }
}