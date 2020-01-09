import {
	async,
	ComponentFixture,
	TestBed,
	inject,
} from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { PokedexService } from '../pokedex.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

describe('PokedexComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				PokedexComponent,
				PokemonListComponent,
				RouterOutlet,
				NgModule,
			],
			imports: [HttpClientModule],
		}).compileComponents();
	});
});
