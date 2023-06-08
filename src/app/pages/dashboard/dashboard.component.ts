import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  template: `
    <ngx-top-bar></ngx-top-bar>
    <router-outlet></router-outlet>
  `,
})
export class DashboardComponent implements OnInit {

  constructor(
  ) {

  }


  ngOnInit(): void {
  }


}
