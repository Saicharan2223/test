import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { CounterComponent } from "./counter.component"
import { RouterModule} from "@angular/router" 
@NgModule(
    {
        declarations:[CounterComponent],
        exports:[CounterComponent],
        imports:[FormsModule,RouterModule.forRoot([
            {path:"counter",component:CounterComponent}
        ])]
    }
)
export class CounterModule{
    constructor()
    {
        console.log("Counter Module Constructed.....")
    }
}