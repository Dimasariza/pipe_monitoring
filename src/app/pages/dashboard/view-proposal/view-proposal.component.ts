import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-view-proposal',
  templateUrl: './view-proposal.component.html',
})
export class ViewProposalComponent implements OnInit {

  ngOnInit(): void {
    for(let i=0; i < 20; i++) this.tableData.push({ 
      proposal_id : 'example proposal id',
      inspection_plan_date : 'example plan date',
      piping_circuit : 'example piping circuit',
      remarks : 'example class',
    })
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'proposal_id', head : 'Proposal Id', width : '100px' },
    { type : 'text', prop : 'inspection_plan_date', head : 'Inspection Plan Date', width : '200px' },
    { type : 'text', prop : 'piping_circuit', head : 'Piping/Piping Circuit', width : '200px' },
    { type : 'text', prop : 'remarks', head : 'Remarks', width : '200px' },
  ]

}
