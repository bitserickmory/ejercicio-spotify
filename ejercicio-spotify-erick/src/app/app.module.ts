import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home.component';
import { BusquedaComponent } from './componentes/busqueda.component';
import { ArtistComponent } from './componentes/artist.component';
import { NavbarComponent } from './componentes/menu/menu.component';
import { CardsComponent } from './componentes/cards.component';
import { LoadingComponent } from './componentes/menu/loading.component';
import { UserComponent } from './componentes/perfil.component';
import { LoginComponent } from './componentes/login.component';
import { AlbumComponent } from './componentes/album.component';
import { DiscografiaComponent } from './componentes/discografia.component';
import { LibraryComponent } from './componentes/libreria/myalbums.component';

// routes
import { ROUTES } from  './app.routing';

// pipes
import { NoimagePipe } from './componentes/pipes/noimage.pipe';
import { DomseguroPipe } from './componentes/pipes/domseguridad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    UserComponent,
    DomseguroPipe,
    LoginComponent,
    AlbumComponent,
    DiscografiaComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
