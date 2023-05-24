import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } 
        from '@techiediaries/ngx-qrcode';
        
@Component({
  selector: 'ngx-dashboard-details',
  templateUrl: './dashboard-details.component.html',
})
export class DashboardDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  
  // Need to specify the valid website address
  value = 'https://www.google.com/';

}
