import {
	async,
	ComponentFixture,
	TestBed,
	inject,
} from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokedexService } from '../pokedex.service';
import { Router, ROUTER_INITIALIZER } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokedexComponent', () => {
	// beforeEach(async() => {
	// 	TestBed.configureTestingModule({
	// 		declarations: [PokedexComponent, PokemonListComponent],
	// 		providers: [Router, ROUTER_INITIALIZER],
	// 		imports: [RouterTestingModule]
	// 	}).compileComponents();
	// });
	// it('Component Header works!', () => {
	// 	let fixture = TestBed.createComponent(PokedexComponent);
	// 	let component = fixture.debugElement.componentInstance;
	// 	expect(component).toBeTruthy();
	// });
	// it('should get the pokemons from the service', () => {
	// 	let fixture = TestBed.createComponent(PokedexComponent);
	// 	let component = fixture.debugElement.componentInstance;
	// 	let pokedexService = fixture.debugElement.injector.get(PokedexService);
	// 	fixture.detectChanges();
	// 	expect(pokedexService.getPokemonList).toEqual(component.pokemon);
	// })
	// it('should inject the component', inject([PokedexComponent, PokedexService, Router],
	// 	(component: PokedexComponent) => {
	// 	  expect(component).toBeTruthy();
	// 	  // expect(component.currentUser.firstname).toEqual('Jan');
	// 	}));
	// it('should return an array of elements', async(() => {
	// 	let fixture = TestBed.createComponent(PokedexComponent);
	// 	let component = fixture.debugElement.componentInstance;
	// 	let pokedexService = fixture.debugElement.injector.get(PokedexService);
	// 	let spy = spyOn(pokedexService, 'getPokemonList')
	// 	.and.returnValue([]);
	// 	fixture.detectChanges();
	// 	fixture.whenStable().then(() => {
	// 		expect(component.pokemons).toBe(pokedexService.pokemonList)
	// 	});
	// }))
});
