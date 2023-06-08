import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ngx-demage-mechanism',
  templateUrl: './demage-mechanism.component.html',
})
export class DemageMechanismComponent implements OnInit {

  ngOnInit(): void {
    for(let i=0; i < 20; i++) this.tableData.push({ 
      piping_id : 'id',
      piping_damage_mechanism : 'example name',
      active : 'example active',
      notes : 'example notes',
      expected_type : 'expected type',
      last_inspection : 'Last inspection',
      insp_due_date : 'insp due date',
    })

    let tablePosition = []
    for(let i = 1; i <= 40; i++) tablePosition.push({position : i})
    this.dataSource = new MatTableDataSource(tablePosition)
  }

  tableData:any[] = []
  columnDetails = [ 
    { type : 'text', prop : 'piping_id', head : 'Piping Id', width : '100px' },
    { type : 'text', prop : 'piping_damage_mechanism', head : 'Piping Damage Mechanism', width : '200px' },
    { type : 'text', prop : 'active', head : 'Active', width : '200px' },
    { type : 'text', prop : 'notes', head : 'Notes', width : '200px' },
    { type : 'text', prop : 'expected_type', head : 'Expected Type/Location', width : '200px' },
    { type : 'text', prop : 'last_inspection', head : 'Last Insp.Date', width : '200px' },
    { type : 'text', prop : 'insp_due_date', head : 'Insp. Due Date', width : '200px' },
  ]

  selectionData = 1;

  dataSource 
  displayedColumns: string[] = [ 'position' ];
  resultsLength = 0;

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

}
