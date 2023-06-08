import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-cml',
  templateUrl: './cml.component.html',
})
export class CmlComponent implements OnInit {

  constructor(
    private activatedroute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const route = this.activatedroute.snapshot.paramMap.get('id')
    for(let i=1; i <= 20; i++) this.tableData.push({ 
      cml_id : i,
      gauge_point : 'Gauge',
      point_location : 'Location',
      nominal_thickness : '0.1',
      min_required_thickness : '0.1',
      last_thickness_reading : '0.1',
      last_thickness_date : '08/06/2023',
      calculate_cr : '08/06/2023',
    })

    this.tableHeader = { title : `Pipe ${route}`, filter : "CML Id" }
  }

  tableHeader : any;
  tableData:any[] = []
  columnDetails = [ 
    { type : 'text', prop : 'cml_id', head : 'CML Id', width : '200px' },
    { type : 'text', prop : 'gauge_point', head : 'Gauge Point', width : '200px' },
    { type : 'text', prop : 'point_location', head : 'Point Location', width : '200px' },
    { type : 'text', prop : 'nominal_thickness', head : 'Nominal Thickness (mm)', width : '200px' },
    { type : 'text', prop : 'min_required_thickness', head : 'Min. Required Thickness (mm)', width : '200px' },
    { type : 'text', prop : 'last_thickness_reading', head : 'Last Thickness Reading (mm)', width : '200px' },
    { type : 'text', prop : 'last_thickness_date', head : 'Last Thickness Date', width : '200px' },
    { type : 'text', prop : 'calculate_cr', head : 'Calculated CR (mm/Year)', width : '200px' },
  ]

}
