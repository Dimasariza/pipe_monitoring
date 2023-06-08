import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } 
        from '@techiediaries/ngx-qrcode';
import { MatPaginator } from "@angular/material/paginator";

@Component({
    selector: 'ngx-report-piping-assets',
    templateUrl: './report-piping-assets.html',
})
export class ReportPipingAssets implements OnInit {
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'https://www.google.com/';


    ngOnInit(): void {
        for(let i = 1; i <= 40; i++)
        this.tablePosition.push({position : i})

        for(let i=0; i < 20; i++) this.tableData.push({ 
            inspection_id : 'id',
            inspection_date : 'inspection date',
            damage_mechanism : 'damage Mechanism',
            inspection_summary : 'inspection summary',
            caried_out : 'caried out',
        })
    }
  
    tablePosition:any[] = []
    dataSource = new MatTableDataSource(this.tablePosition);
    displayedColumns: string[] = ['position', ];
    resultsLength = 0;
    selectionData = 1;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    imageLink = [
        { src : "https://wallpapercave.com/wp/wp6954364.jpg", alt : "Pipe 1"},
        { src : "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt : "Pipe 2"},
        { src : "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt : "Pipe 3"},
    ]

    spesificationItem = [
        { props : 'nominal_pipe_size', name : "Nominal Pipe Size", unit : 'mm' },
        { props : 'pipe_design_code', name : "Pipe Design Code" },
        { props : 'schedule', name : "Schedule", unit : 'mm' },
        { props : 'outisde_diameter', name : "Outside Diamter" },
        { props : 'longtd_quality_factor', name : "Longtd. Quality Factor (E)" },
        { props : 'weld_joint_factor', name : "Weld Joint Factor (W)" },
        { props : 'allowable_unit_stress', name : "Allowable Unit Stress (S)", unit : 'psi' },
        { props : 'coefficient', name : "Coefficient (Y)" },
        { props : 'min_design_pressure', name : "Min. Design Pressure (P min)", unit : 'psig' },
        { props : 'max_design_pressure', name : "Max. Design Pressure (P max)", unit : 'psig' },
        { props : 'min_design_temperature', name : "Min. Design Temperature (T min)", unit : 'F' },
        { props : 'max_design_temperature', name : "Max Design Temperature (T max)", unit : 'F' },
        { props : 'corrosion_allowance', name : "Corrosion Allowance", unit : 'mm' },
        { props : 'mechanical_allowance', name : "Mechanical Allowances", unit : 'mm' },
        { props : 'min_structural_thickness', name : "Min. Structural Thickness", unit : 'mm' },
        { props : 'min_alert_thickness', name : "Min. Alert Thickness", unit : 'mm' },
        { props : 'nominal_thickness', name : "Nominal Thickness", unit : 'mm' },
    ];

    pipingVisual = [
        { name : 'Leaks', props : 'Excellent' },
        { name : 'Misalignment', props : 'Good' },
        { name : 'Vibration', props : 'Average' },
        { name : 'Supports', props : 'Below Average' },
        { name : 'Corrosion', props : 'Poor' },
        { name : 'Insulation', props : 'Excellent' },
    ]

    pipingThickness = [
        { name : 'Reading', props : 'reading' },
        { name : 'Long Term Cr', props : 'long_term_cr' },
        { name : 'Remaining Life', props : 'remaining_life' },
        { name : 'Thick. Min', props : 'thick_min' },
        { name : 'Short Term CR', props : 'short_term_cr' },
        { name : 'Half Life', props : 'half_life' },
        { name : 'Retirement Date', props : 'retirement_date' },
    ]

    activeDamageMechaninsm = [
        { name : 'Corrosion Under Insulation' },
        { name : 'Creep/Stress Rupture' },
    ]

    tableData:any[] = []
    columnDetails = [ 
        { type : 'text', prop : 'inspection_id', head : 'Inspection Id', width : '200px' },
        { type : 'text', prop : 'inspection_date', head : 'Inspection Date', width : '200px' },
        { type : 'text', prop : 'damage_mechanism', head : 'Damage Mechanism', width : '200px' },
        { type : 'text', prop : 'inspection_summary', head : 'Inspection Summary', width : '200px' },
        { type : 'text', prop : 'caried_out', head : 'Caried Out', width : '200px' },
    ]

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
  
    showData(element) {
        this.selectionData = element.position
    }
  
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}