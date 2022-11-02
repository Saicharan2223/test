import {TestBed} from "@angular/core/testing"
import {CounterComponent} from "./counter.component"
describe("Counter Component Unit Testing Demo",() => {
    it("Should create an instance",()=>{
        TestBed.configureTestingModule({
            declarations:[CounterComponent]
        })
        let fixture=TestBed.createComponent(CounterComponent)
        expect(fixture).toBeDefined()
    })
})