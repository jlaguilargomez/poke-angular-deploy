import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from 'src/app/pokedex.service';
import { Pokemon } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  public pokemonSelected: object;

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'] - 1;
      this.pokedexService.pokemonsLoaded.subscribe((data: Pokemon[]) => {
        this.pokemonSelected = data[id];
        console.log(this.pokemonSelected);
      });
    });
  }

  colorBar(num) {
    switch (true) {
      case num < 10:
        return '#d6522a';

      case num >= 10 && num < 20:
        return '#d6822a';

      case num >= 20 && num < 30:
        return '#d6b12a';

      case num >= 30 && num < 40:
        return '#c0c42a';

      case num >= 40 && num <= 50:
        return '#aad62a';
      case num >= 50 && num <= 60:
        return '#99d62b';
      case num >= 60 && num <= 70:
        return '#87d52c';
      case num >= 70 && num <= 80:
        return '#62d52d';
      case num >= 80 && num <= 90:
        return '#34d52e';
      case num >= 90 && num <= 100:
        return '#30d55d';

      default:
        return 'grey';
    }
  }
}
