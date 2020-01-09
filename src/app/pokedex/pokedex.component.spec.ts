import {
	async,
	ComponentFixture,
	TestBed,
	inject,
} from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

describe('PokedexComponent', () => {
	// beforeEach(() => {
	// 	TestBed.configureTestingModule({
	// 		declarations: [PokedexComponent, PokemonListComponent],
	// 		providers: [Router]
	// 	}).compileComponents();
	// });
	// it('Component Header works!', () => {
	// 	let fixture = TestBed.createComponent(PokedexComponent);
	// 	let component = fixture.debugElement.componentInstance;
	// 	expect(component).toBeTruthy();
	// });
});
