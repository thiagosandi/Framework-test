import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../api.service';
import { Album } from 'src/app/models/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private _api: ApiService) { }

  displayedColumns: string[] = [ 'userId', 'id', 'title'];
  dataSource: MatTableDataSource<Album>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this._api.getPosts().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;  
    }, err => {
      console.log(err);
    });
  }

  applyFilter(filterValue: string) {  
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    }  
  }  
}
