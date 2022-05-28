import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumUploadComponent } from './album-upload/album-upload.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { GeneratedArtPieceComponent } from './generated-art-piece/generated-art-piece.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumUploadComponent,
    NavBarComponent,
    ListViewComponent,
    GeneratedArtPieceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
