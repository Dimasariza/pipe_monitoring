import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
    selector: 'ngx-dashboard-remaining-chart',
    template : '<canvas id="DashboardRemaining">'
})
export class DashboardRemainingChart extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions("Remaining Life vs Year", 'Remaining Life (years)', 'Year')
  }

  ngOnInit(): void {
    this.generateChart('DashboardRemaining')
  }
}