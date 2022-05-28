import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneratedImages } from './generated-images';

@Injectable({
  providedIn: 'root'
})
export class GeneratedImagesService {

 
  constructor(private httpClient: HttpClient) { }
  baseUrl = "https://localhost:5265/generated-images";

  getGeneratedImage(){
    return this.httpClient.get<GeneratedImages>(this.baseUrl);
  }

  


}
