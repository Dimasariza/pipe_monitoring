import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-piping-circuits',
  templateUrl: './piping-circuits.component.html',
})
export class PipingCircuitsComponent implements OnInit {

  ngOnInit(): void {
    for(let i=0; i < 20; i++) this.tableData.push({ 
      piping_circuit_id : 'example circuit id',
      piping_circuit_name : 'example name',
      date_in_service : 'example date',
      class : 'example class',
      notes : 'example notes',
    })
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'piping_circuit_id', head : 'Piping Circuit Id', width : '100px' },
    { type : 'text', prop : 'piping_circuit_name', head : 'Piping Circuit Name', width : '200px' },
    { type : 'text', prop : 'date_in_service', head : 'Date In Service', width : '200px' },
    { type : 'text', prop : 'class', head : 'Class', width : '200px' },
    { type : 'text', prop : 'notes', head : 'Notes', width : '200px' },
  ]

}
