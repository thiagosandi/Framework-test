import { Component, OnInit } from '@angular/core';

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
  dataSource: Post[];

  isLoadingResults = true;

  ngOnInit() {
    this._api.getPosts()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
