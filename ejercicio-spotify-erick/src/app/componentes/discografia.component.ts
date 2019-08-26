import { Component } from '@angular/core';
import { SpotifyService } from './servicio/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'discografia',
  templateUrl: './discografia.component.html',
  styles: []
})
export class DiscografiaComponent {

  discrography: any = {};

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService) {

    // this.router.params.subscribe(params => {
    //   this.getDiscography( params['id'] );
    // });
  }

  // getDiscography( idArtist: string ) {
  //   this.spotify.getDiscography( idArtist )
  //   .subscribe(album => {
  //     this.discrography = album;
  //     console.log(idArtist);
  //     console.log(this.discrography);
  //   });
  // }
}