import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
  selector: 'ngx-dashboard-thickness-chart',
  template : '<canvas id="DashboardThickness">'
})
export class DashboardThicknessChart extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions("Thickness vs Year", 'Thickness (mm)', 'Year')
  }

  ngOnInit(): void {
    this.generateChart('DashboardThickness')
  }
}