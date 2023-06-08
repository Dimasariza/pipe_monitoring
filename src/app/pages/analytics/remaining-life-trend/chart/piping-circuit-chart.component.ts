import { Component } from "@angular/core";
import { ChartsComponent } from "../../../../component/chart/charts-component";

@Component({
    selector: 'ngx-pipingCircuitChart-chart',
    template : '<canvas id="pipingCircuitChart">'
})
export class PipingCircuitChartComponent extends ChartsComponent {
  constructor() {
    super()
    this.defineOptions({
      chartTitle : "Chart Piping Circuit", 
    })
  }

  public chartType: any = 'bar'; 
  public yLabels: any[] = ['Pipe 101A', 'Pipe 102A', 'Pipe 103A', 'Pipe 104A', 'Pipe 105A'] 
  public datasets: any = [
        {
            label: "Reading (mm)",
            data: ['467', '576', '572', '79', '92'],
            backgroundColor: 'rgba(255,0,0,.5)',
            borderColor: 'rgba(255,0,0,.5)',
        },
        {
            label: "T minimum (mm)",
            data: ['542', '542', '536', '327', '17'],
            backgroundColor: 'rgba(100,100,0,.5)',
            borderColor: 'rgba(100,100,0,.5)',
        },
        {
            label: "Nominal Thickness (mm)",
            data: ['504', '142', '336', '317', '100'],
            backgroundColor: 'rgba(10,50,100,.5)',
            borderColor: 'rgba(10,50,100,.5)',
        },
        {
            label: "Corrosion Rate (mm/Year)",
            data: ['52', '42', '336', '527', '517'],
            backgroundColor: 'rgba(90,190,90,.5)',
            borderColor: 'rgba(90,190,90,.5)',
        },
    ]

  ngOnInit(): void {
    this.generateChart('pipingCircuitChart')
  }
}