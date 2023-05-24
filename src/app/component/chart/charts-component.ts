import { Component, OnInit } from "@angular/core";
import { Chart,  registerables} from 'chart.js'
Chart.register(...registerables);

@Component({
    template : ""
})
export class ChartsComponent implements OnInit {
    constructor() { }
    defineOptions(chartTitle, yTitle, xTitle) {
        this.options = {
            responsive: true,
            plugins: {
                    legend: {
                    position : 'right'
                },
                title: {
                    display: true,
                    text: chartTitle,
                    color: '#191',
                },
            },
            scales: {
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: yTitle,
                    font: {
                        family: 'Times',
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: {top: 0, bottom: 10}
                    }
                },
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: xTitle,
                        font: {
                            family: 'Times',
                            style: 'normal',
                            lineHeight: 1.2
                        },
                        padding: {top: 0, bottom: 10}
                    }
                }
            } 
        }
    }

    generateChart(id) {
        this.chart = new Chart(id, {
            type: 'line',
            data: this.data,
            options : this.options
        });
    }

    public options : any;
    public chart;
    public data : any = {
        labels: ['2020', '2021', '2022', '2023', '2024'], 
        datasets: [
            {
                label: "CML 1A",
                data: ['467','576', '572', '79', '92'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,0,0,.5)',
            },
            {
                label: "CML 1B",
                data: ['542', '542', '536', '327', '17'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(100,100,0,.5)',
            },
            {
                label: "CML 1C",
                data: ['504', '142', '336', '317', '100'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(10,50,100,.5)',
            },
            {
                label: "CML 1D",
                data: ['52', '42', '336', '527', '517'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(90,190,90,.5)',
            },
            {
                label: "CML 1E",
                data: ['50', '402', '336', '427', '217'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(190,190,10,.5)',
            },
            {
                label: "CML 1F",
                data: ['92', '342', '536', '227', '117'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(200,200,20,.5)',
            },
            {
                label: "CML 1G",
                data: ['52', '242', '436', '327', '217'],
                backgroundColor: 'transparent',
                borderColor: 'rgba(20,150,200,.5)',
            }  
        ]
    }

    ngOnInit(): void {  }
}