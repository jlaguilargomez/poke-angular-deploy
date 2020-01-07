import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokedexService } from 'src/app/pokedex.service';
import { Pokemon } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {}
}
