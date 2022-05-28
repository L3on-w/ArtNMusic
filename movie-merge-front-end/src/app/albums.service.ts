import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, PostAlbums } from './models/Album';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = "https://localhost:5265/albums";
  
  // postAlbums(postAlbums: PostAlbums) {
  //   throw new Error('Method not implemented.');
  // }
  getAlbums() {
    return this.httpClient.get<Array<Album>>(this.baseUrl);
  }
  postAlbum(albums: PostAlbums) {
    return this.httpClient.post<Album>(this.baseUrl, albums);
  }
}

// create moodels in front end for properties album info, etc. need from back end
