import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent  {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  SeeArtist( item: any ) {
    let artistId;

    if( item.type === 'artist') {
      artistId = item.id;
    }
    else {
      artistId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistId ]);
  }
}
