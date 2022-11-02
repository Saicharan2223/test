
import { Component,OnInit, OnDestroy, Input, Output,EventEmitter } from "@angular/core"
import { throws } from "assert"
@Component({
    //specify tag name
    selector: "app-counter",
    //output for the component
    template: `<h2>Counter Component {{count}}</h2>
    <button (click)="incrementCount()">Increase</button>
    <input type="number" value="{{count}}">
    <input type="number" [value]="count">
    <input type="number" [(ngModel)]="count">`
})
export class CounterComponent implements OnInit,OnDestroy{
    @Input()
    count: number
    @Output()
    counterEvent:EventEmitter<number>=new EventEmitter()
    constructor(){
        this.count=0
        console.log("Counter Component created")
    }
    
    ngOnDestroy(): void {
        console.log("Counter Component Destroyed")
    }
    ngOnInit(): void {
        console.log("Counter Component Rendered")
    }
    incrementCount():void{
        this.count++
        this.counterEvent.emit(this.count)
    }
}