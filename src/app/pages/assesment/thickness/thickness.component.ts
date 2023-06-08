import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-thickness',
  templateUrl: './thickness.component.html',
})
export class ThicknessComponent implements OnInit {

  ngOnInit(): void {
    for(let i=1; i <= 20; i++) this.tableData.push({ 
      piping_id : i,
      reading : 'example reading',
      t_min : 'example date',
      lt_cr : 'example LTCR',
      st_cr : 'example STCR',
      remaining_life : 'example Remaining Life',
      half_life : 'example Half Life',
      retirement_date : 'example Retirement date',
    })
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'navto', prop : 'piping_id', head : 'Piping Id', width : '200px', nav : '/pages/cml/' },
    { type : 'text', prop : 'reading', head : 'Reading (mm)', width : '200px' },
    { type : 'text', prop : 't_min', head : 'T min (mm)', width : '200px' },
    { type : 'text', prop : 'lt_cr', head : 'LT CR (mm/Year)', width : '200px' },
    { type : 'text', prop : 'st_cr', head : 'ST CR (mm/Year)', width : '200px' },
    { type : 'text', prop : 'remaining_life', head : 'Remaining Life (Year)', width : '200px' },
    { type : 'text', prop : 'half_life', head : 'Half Life (Year)', width : '200px' },
    { type : 'text', prop : 'retirement_date', head : 'Retirement Date', width : '200px' },
  ]
}
