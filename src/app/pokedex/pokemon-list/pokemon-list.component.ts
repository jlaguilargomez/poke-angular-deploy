import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: Object[];

  constructor() {}

  renderPokemon(e) {
    console.log(e);
  }

  ngOnInit() {}
}
