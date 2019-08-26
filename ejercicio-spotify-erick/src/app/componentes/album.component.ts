import { Component } from '@angular/core';
import { SpotifyService } from './servicio/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent {

  album: any = {};

  constructor( private spotify: SpotifyService,
               private router: ActivatedRoute ) {

    this.router.params.subscribe( params => {
      this.getAlbum( params['id'] );
    });
  }

  getAlbum( id: any ) {
    this.spotify.getAlbum(id)
      .subscribe(album => {
        this.album = album;
      });
  }

  myAlbums(id: any) {
    this.spotify.myAlbums(id).subscribe(album => {});
  }

}