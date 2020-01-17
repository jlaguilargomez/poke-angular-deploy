import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../../pipes/search-filter.pipe';
import { RouterLink, Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

describe('PokemonListComponent', () => {
	let component: PokemonListComponent;
	let fixture: ComponentFixture<PokemonListComponent>;
	let pokedexService: PokedexService;
	let router;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [PokedexService],
			declarations: [PokemonListComponent, SearchFilterPipe],
			imports: [
				HttpClientTestingModule,
				RouterTestingModule,
				FormsModule,
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PokemonListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		pokedexService = TestBed.get(PokedexService);
		router = TestBed.get(Router);
	});

	it('should renderPokemon', done => {
		const spy = spyOn(router, 'navigate');
		new Observable(observer => {
			component.renderPokemon('Pikachu');
			pokedexService.cardLoaded.next(true);
			observer.next();
		}).subscribe(() => {
			done();
		});
		expect(spy).toHaveBeenCalledWith(['pokedex', 'Pikachu'], {
			fragment: 'card',
		});
	});
});
