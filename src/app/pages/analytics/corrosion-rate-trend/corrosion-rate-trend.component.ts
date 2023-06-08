import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Chart,  registerables} from 'chart.js'
Chart.register(...registerables);

@Component({
  selector: 'ngx-corrosion-rate-trend',
  templateUrl: './corrosion-rate-trend.component.html',
})
export class CorrosionRateTrendComponent implements OnInit {

  ngOnInit(): void {
      for(let i = 1; i <= 40; i++) this.tableData.push({position : i})
      this.dataSource = new MatTableDataSource(this.tableData);
  }

  selectionData = 1;
  tableData : any[] = [];

  dataSource 
  displayedColumns: string[] = [ 'position' ];
  selection = new SelectionModel(true, []);
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


