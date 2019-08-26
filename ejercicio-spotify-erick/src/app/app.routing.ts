/*import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes a Importar
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error404.component';
import { ProductosComponent } from './components/productos_lista.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { LoginComponent } from './componentes/login.component';


const appRoutes: Routes = [
        path:'',component: HomeComponent},
        {path:'home',component: HomeComponent},
        {path:'productos',component: ProductosComponent},
        {path:'crear-producto',component: ProductoAddComponent},
        {path:'**',component: ErrorComponent}
        {path:'login',component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const AppRoutingModule: any[] = [];
*/
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home.component';
import { BusquedaComponent } from './componentes/busqueda.component';
import { UserComponent } from './componentes/perfil.component';
import { ArtistComponent } from './componentes/artist.component';
import { LoginComponent } from './componentes/login.component';
import { AlbumComponent } from './componentes/album.component';
import { LibraryComponent } from './componentes//libreria/myalbums.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: 'account', component: UserComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'collection/album', component: LibraryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const AppRoutingModule: any[] = [];