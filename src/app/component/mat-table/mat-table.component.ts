import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'ngx-mat-table',
  templateUrl: './mat-table.component.html',
})
export class MatTableComponent implements OnInit {
  constructor( ) { }

  ngOnInit(): void { 
    this.displayedColumns = this.columnDetails.map(column => column.prop);
    this.dataSource = new MatTableDataSource(this.tableData)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() tableHead;
  @Input() tableData;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  resultsLength = 0;
  selection = new SelectionModel(true, []);
  dataSource

  @Input() columnDetails = [ 
    { type : 'select', prop : 'select', head : '', width : '60px' },
    { type : 'position', prop : 'position', head : 'No. ', width : '40px' },
    { type : 'text', prop : 'name', head : 'Name', width : '100px' },
    { type : 'text', prop : 'weight', head : 'Weight', width : '200px' },
    { type : 'text', prop : 'symbol', head : 'Symbol', width : '200px' },
  ]

  displayedColumns: string[]

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
