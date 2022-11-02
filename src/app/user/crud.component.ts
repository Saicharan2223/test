import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  template: `
    <a routerLink="users">User management | </a>
    <a routerLink="persons">Person Mangement | </a>
    <hr/>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
