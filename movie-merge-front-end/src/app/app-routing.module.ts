import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AlbumUploadComponent } from "./album-upload/album-upload.component";
import { LoginComponent } from "./login/login.component";
import { GeneratedArtPieceComponent } from "./generated-art-piece/generated-art-piece.component";
import { ListViewComponent } from "./list-view/list-view.component";

// const routes: Routes = [
//     {path: 'home', component: HomeComponent},
//     {path: 'album-upload', component: AlbumUploadComponent},
//     {path: 'contact', component: ContactComponent}
// ];

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "album-upload",
        component: AlbumUploadComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "generated-art-piece",
        component: GeneratedArtPieceComponent
    },
    {
        path: "list-view",
        component: ListViewComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}