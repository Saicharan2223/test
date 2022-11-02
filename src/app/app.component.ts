import { Template } from "@angular/compiler/src/render3/r3_ast"
import { Component } from "@angular/core"
@Component({
    //specify tag name
    selector: "app-root",
    //output for the component
    templateUrl: "./app.component.html",
    styleUrls:["./app.component.css"]
    
})
export class AppComponent{
    appHeading:string
    show=false;
    numbers = [10,21,30,50]
    constructor(){
        this.appHeading="<u>Colruyt</u> Group, Belgium"
    }
    handleButtonClick(){
        this.appHeading="COLRUYT,Mindspace"
    }
    handleCounter(){
        this.show=!this.show
    }
}