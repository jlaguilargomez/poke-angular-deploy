import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../pokedex.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../interface/pokemon.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[];
  pokemonObservable: Observable<Pokemon[]>;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokemonObservable = Observable.create(observer => {
      Promise.all(this.pokedexService.getPokemons(151)).then(
        (dataSet: Pokemon[]) => {
          this.pokemons = dataSet;
          observer.next(this.pokemons);
          console.log(this.pokemons);
        }
      );
    });
  }
}
