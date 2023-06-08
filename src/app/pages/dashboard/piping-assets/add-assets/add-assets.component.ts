import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-assets',
  templateUrl: './add-assets.component.html',
})
export class AddAssetsComponent implements OnInit {

  constructor(
    private dialog: NbDialogRef<any>
  ) { }

  ngOnInit(): void {
  }

  @Input() dialogData;

  spesificationItem = [
    { id : 'nominal_pipe_size', name : "Nominal Pipe Size", unit : 'mm' },
    { id : 'pipe_design_code', name : "Pipe Design Code" },
    { id : 'schedule', name : "Schedule", unit : 'mm' },
    { id : 'outisde_diameter', name : "Outside Diamter" },
    { id : 'longtd_quality_factor', name : "Longtd. Quality Factor (E)" },
    { id : 'weld_joint_factor', name : "Weld Joint Factor (W)" },
    { id : 'allowable_unit_stress', name : "Allowable Unit Stress (S)", unit : 'psi' },
    { id : 'coefficient', name : "Coefficient (Y)" },
    { id : 'min_design_pressure', name : "Min. Design Pressure (P min)", unit : 'psig' },
    { id : 'max_design_pressure', name : "Max. Design Pressure (P max)", unit : 'psig' },
    { id : 'min_design_temperature', name : "Min. Design Temperature (T min)", unit : 'F' },
    { id : 'max_design_temperature', name : "Max Design Temperature (T max)", unit : 'F' },
    { id : 'corrosion_allowance', name : "Corrosion Allowance", unit : 'mm' },
    { id : 'mechanical_allowance', name : "Mechanical Allowances", unit : 'mm' },
    { id : 'min_structural_thickness', name : "Min. Structural Thickness", unit : 'mm' },
    { id : 'min_alert_thickness', name : "Min. Alert Thickness", unit : 'mm' },
    { id : 'nominal_thickness', name : "Nominal Thickness", unit : 'mm' },
  ];

  imageLink = [
    { src : "https://wallpapercave.com/wp/wp6954364.jpg", alt : "Pipe 1"},
    { src : "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt : "Pipe 2"},
    { src : "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt : "Pipe 3"},
  ]


  closeDialog(arr = null) {
    this.dialog.close()
    console.log(arr)
  }

}
