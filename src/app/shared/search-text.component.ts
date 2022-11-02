import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'search-text',
  template: `
  {{searchLabel}}: <input type="text" [(ngModel)]="searchVal"/> <button class="btn btn-info" (click)="handleSearch()">Go</button>  `,
  styles: [
  ]
})
export class SearchTextComponent implements OnInit {
  searchVal:string=""
  @Input()
  searchLabel:string=""

  @Output()
  searchEvent:EventEmitter<string>=new EventEmitter()
  handleSearch()
  {
    this.searchEvent.emit(this.searchVal)
  }
  constructor() { }

  ngOnInit(): void {
  }


}
