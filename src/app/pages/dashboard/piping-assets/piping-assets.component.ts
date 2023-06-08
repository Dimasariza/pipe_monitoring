import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-piping-assets',
  templateUrl: './piping-assets.component.html',
})
export class PipingAssetsComponent implements OnInit {
  ngOnInit(): void {
      for(let i=0; i < 20; i++) this.tableData.push({ 
        piping_id : 'example id',
        piping_name : 'example name',
        date_in_service : 'example date'
      })
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '20px' },
    { type : 'text', prop : 'piping_id', head : 'Piping Id', width : '100px' },
    { type : 'text', prop : 'piping_name', head : 'Piping Name', width : '200px' },
    { type : 'text', prop : 'date_in_service', head : 'Date In Service', width : '200px' },
    // { type : 'button', prop : 'qr_print', head : 'QR', width : '50px',
    //   button : [
    //     { name : 'QR Print', icon : 'qrcode', pack : 'fas' },
    //   ]
    // },
  ]
  
}
