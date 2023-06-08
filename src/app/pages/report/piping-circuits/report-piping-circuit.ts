import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } 
        from '@techiediaries/ngx-qrcode';
import { MatPaginator } from "@angular/material/paginator";

@Component({
    selector: 'ngx-report-piping-circuit',
    templateUrl: './report-piping-circuit.html',
})
export class ReportPipingCircuit implements OnInit {
    elementType = NgxQrcodeElementTypes.URL;
    correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    value = 'https://www.google.com/';


    ngOnInit(): void {
        for(let i = 1; i <= 40; i++)
        this.tablePosition.push({position : i})

        for(let i=0; i < 20; i++) this.tableData.push({ 
            piping_id : 'id',
            reading : 'reading',
            t_min : 'T min',
            lt_cr : 'LT CR',
            st_cr : 'ST CR',
            rl : 'RL',
            hl : 'HL',
            retriement_date : 'Retriement Date',
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

    pipingVisual = [
        { name : 'Leaks', props : 'Excellent' },
        { name : 'Misalignment', props : 'Good' },
        { name : 'Vibration', props : 'Average' },
        { name : 'Supports', props : 'Below Average' },
        { name : 'Corrosion', props : 'Poor' },
        { name : 'Insulation', props : 'Excellent' },
    ]

    activeDamageMechaninsm = [
        { name : 'Corrosion Under Insulation' },
        { name : 'Creep/Stress Rupture' },
    ]

    tableData:any[] = []
    columnDetails = [ 
        { type : 'text', prop : 'piping_id', head : 'Piping Id', width : '200px' },
        { type : 'text', prop : 'reading', head : 'Reading (mm)', width : '200px' },
        { type : 'text', prop : 't_min', head : 'T min (mm)', width : '200px' },
        { type : 'text', prop : 'lt_cr', head : 'LT CR (mm/Year)', width : '200px' },
        { type : 'text', prop : 'st_cr', head : 'ST CR (mm/Year)', width : '200px' },
        { type : 'text', prop : 'rl', head : 'RL (Years)', width : '200px' },
        { type : 'text', prop : 'hl', head : 'HL (Years)', width : '200px' },
        { type : 'text', prop : 'retriement_date', head : 'Retriement date', width : '200px' },
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