import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './servicio/spotify.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;

    this.spotify.getNewRelease()
      .subscribe( ( data: any ) => {
        this.newSongs = data;
        this.loading = false;
      });
  }
}