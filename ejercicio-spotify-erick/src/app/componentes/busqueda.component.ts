import { Component } from '@angular/core';
import { SpotifyService } from './servicio/spotify.service';

@Component({
  selector: 'buscar',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) { }

  search(term: string) {
    this.loading = true;

    this.spotify.getArtists( term )
      .subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }

}
