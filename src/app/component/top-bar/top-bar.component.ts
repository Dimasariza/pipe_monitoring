import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PrintQRCodeComponent } from './qr-code/qr-code.dialog';
import { AddAssetsComponent } from '../../pages/dashboard/piping-assets/add-assets/add-assets.component';

@Component({
  selector: 'ngx-top-bar',
  templateUrl: './top-bar.component.html' ,
})
export class TopBarComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
  }

  addNew() {
    this.dialogService.open(AddAssetsComponent, {
      context: {
        dialogData : 'hello'
        // title: 'This is a title passed to the dialog component',
      },
    });
  }

  import() {
    console.log('import')
  }

  export() {
    console.log('export')
  }

  print() {
    console.log('print')
  }

  qrPrint() {
    console.log('qr print')
    this.dialogService.open(PrintQRCodeComponent);
  }

}
