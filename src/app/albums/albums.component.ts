import { Component, OnInit } from '@angular/core';

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
  dataSource: Album[];

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
