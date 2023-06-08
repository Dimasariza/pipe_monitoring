import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-proposal',
  templateUrl: './add-proposal.component.html',
})
export class AddProposalComponent implements OnInit {

  constructor(
    private dialog: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  @Input() dialogData;

  closeDialog(arr = null) {
    this.dialog.close()
    console.log(arr)
  }

}
