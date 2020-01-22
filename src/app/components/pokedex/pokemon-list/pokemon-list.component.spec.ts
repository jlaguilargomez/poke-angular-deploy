import {
	async,
	ComponentFixture,
	TestBed,
	ComponentFixtureAutoDetect,
} from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TagBoxComponent } from './tag-box/tag-box.component';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LandingComponent } from '../../landing/landing.component';
import { PokedexComponent } from '../pokedex.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { CharactersAnimationComponent } from 'src/app/shared/components/characters-animation/characters-animation.component';
import { ButtonArrowComponent } from 'src/app/shared/components/button-arrow/button-arrow.component';
import { HeaderCurveComponent } from 'src/app/shared/components/header-curve/header-curve.component';
import { CardFunctionalityComponent } from 'src/app/shared/components/card-functionality/card-functionality.component';
import { CardMemberComponent } from 'src/app/shared/components/card-member/card-member.component';
import { BackTopBtnComponent } from 'src/app/shared/components/back-top-btn/back-top-btn.component';
import { PokemonCardComponent } from '../pokemon-detail/pokemon-card/pokemon-card.component';
import { PokemonMapComponent } from '../pokemon-detail/pokemon-map/pokemon-map.component';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';
import { PokedexService } from 'src/app/services/pokedex.service';
import { BackgroundDexStyleComponent } from 'src/app/shared/components/card-functionality/background-dex-style/background-dex-style.component';

describe('Component: PokemonListComponent', () => {
	let component: PokemonListComponent;
	let fixture: ComponentFixture<PokemonListComponent>;
	let pokedexService: PokedexService;
	let router;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				PokedexService,
				HttpClient,
				HttpHandler,
				{ provide: ComponentFixtureAutoDetect, useValue: true },
			],
			declarations: [
				PokemonListComponent,
				TagBoxComponent,
				SearchFilterPipe,
				LandingComponent,
				PokedexComponent,
				PokemonDetailComponent,
				CharactersAnimationComponent,
				ButtonArrowComponent,
				HeaderCurveComponent,
				CardFunctionalityComponent,
				CardMemberComponent,
				BackTopBtnComponent,
				PokemonCardComponent,
				PokemonMapComponent,
				BackgroundDexStyleComponent,
			],
			imports: [
				HttpClientTestingModule,
				RouterTestingModule,
				FormsModule,
				AppRoutingModule,
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

	it('# pokemon-list component has been created', (): void => {
		expect(component).toBeDefined();
	});

	it('# should renderPokemon', done => {
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

	it('# should contain "Pokedex"', (): void => {
		const bannerElement: HTMLElement = fixture.nativeElement;
		expect(bannerElement.textContent).toContain('Pokedex');
	});

	it('# changeTagBoxStatus // should hide or display the tag-box when user clicks on the dropDown Button', (): void => {
		const dropDownButtonEl: HTMLElement = fixture.nativeElement.querySelector(
			'.dropdown-btn'
		);

		// exercise
		dropDownButtonEl.click();
		fixture.detectChanges();
		const tagBoxEl: HTMLElement = fixture.nativeElement.querySelector(
			'app-tag-box'
		);

		// verify
		expect(tagBoxEl).toBeTruthy();
	});

	it('# getDropDownInteraction // should change the status of the displayTagBox value', (): void => {
		// exercise
		component.getDropDownInteraction(false);
		// verify
		expect(component.displayTagBox).toBeFalsy();
	});
});
