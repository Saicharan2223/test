import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-viewer',
  template:
  `<p>
  {{ today }}
  </p>`,
  styles: [
  ]
})
export class DateViewerComponent implements OnInit {
  today=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
