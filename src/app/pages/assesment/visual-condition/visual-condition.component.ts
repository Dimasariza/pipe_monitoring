import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'ngx-visual-condition',
  templateUrl: './visual-condition.component.html',
})
export class VisualConditionComponent implements OnInit {
  ngOnInit(): void {
      for(let i = 1; i <= 40; i++)
      this.tableData.push({position : i})
  }

  tableData:any[] = []
  dataSource = new MatTableDataSource(this.tableData);
  displayedColumns: string[] = ['position', ];
  resultsLength = 0;
  selectionData = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  externalCheckList = [
    { 
      title : "Leaks" , level : "Leaks", source : 
      [ 
        "Process", 
        "Steam Tracking", 
        "Existing Clamp" 
      ] 
    },
    { 
      title : "Misalignment" , level : "Misalignment", source : 
      [ 
        "Piping Misalignment", 
        "Expain Joint Misalignment", 
        "Existing Clamp",
      ] 
    },
    { 
      title : "Vibration" , level : "Vibration", source : 
      [ 
        "Excessive Overhung Weight", 
        "Inadequate Support", 
        "Thin, Small-bore, or Alloy Piping",
        "Threaded Connections",
        "Loose Support Causing Metal Wear"
      ] 
    },
    { 
      title : "Corrosion" , level : "Corrosion", source : 
      [ 
        "Bolting Support Points Under Clamps", 
        "Coating/Painting Deterioration", 
        "Soil-to-air Interfaces",
        "Insulation Interfaces",
        "Biloogical Growth",
      ] 
    },
    { 
      title : "Supports" , level : "Supports", source : 
      [ 
        "Shoes Of Supports", 
        "Hanger Distorsion of Breakage", 
        "Bottomed Out Springs",
        "Brace Distorsion/Breakage",
        "Loose Brackets",
        "Slides Plates/Rollers",
        "Counter Balance Condition",
        "Support Corrosion",
      ] 
    },
    { 
      title : "Insulation" , level : "Insulation", source : 
      [ 
        "Damage/Penetrations", 
        "Missing Jacketing Insulation", 
        "Sealing Deterioration",
        "Bulging",
        "Banding (Broken/Missing)",
      ] 
    },
  ]

}
