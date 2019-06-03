import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../api.service';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor(private _api: ApiService) { }

  displayedColumns: string[] = [ 'userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this._api.getPosts().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err);
    });
  }

}
