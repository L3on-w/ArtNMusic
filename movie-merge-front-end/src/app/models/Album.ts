import { AlbumsService } from "../albums.service";

export interface Album{
    Id: number;
    firstAlbumInput: string;
    secondAlbumInput: string;
    description: string;
    //new album cover that hasnt existed before that user creates with album choice
    createdById: number;
    //FK user Id
    createdDate: Date;
    updatedDate: Date;
   
    
}

export type PostAlbums = Omit<Album, "Id">;


