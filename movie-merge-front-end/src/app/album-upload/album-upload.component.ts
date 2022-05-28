//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { PostAlbums } from '../models/Album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-upload',
  templateUrl: './album-upload.component.html',
  styleUrls: ['./album-upload.component.css']
})
export class AlbumUploadComponent implements OnInit {

  constructor(private _albumsService: AlbumsService) { }
  

  albumsFormGroup = new FormGroup({
    firstAlbumInput: new FormControl(''),
    secondAlbumInput: new FormControl(''),

  })

  uploadAlbums() {
    const postAlbums: PostAlbums = this.albumsFormGroup.value;
    this._albumsService.postAlbum(postAlbums).subscribe();
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  ngOnInit(): void {
  }

}
