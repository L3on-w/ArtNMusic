import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models/Album';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  albums$ = this._albumsService.getAlbums();

  albums: Album[] = [];


  constructor(private _albumsService: AlbumsService) { }

  ngOnInit(): void {
    this._albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
  })
}

}


