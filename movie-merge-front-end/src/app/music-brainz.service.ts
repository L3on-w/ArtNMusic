import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from './models/AlbumQuery';
@Injectable({
  providedIn: 'root'
})
export class MusicBrainzService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:5265/api/MusicBrainz";

  getArtist(){
    return this.httpClient.get<Array<Artist>>(this.baseUrl);


  }


}
