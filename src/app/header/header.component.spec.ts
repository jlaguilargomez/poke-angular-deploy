import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HamburguerIconComponent } from './hamburguer-icon/hamburguer-icon.component';
import { RouterLink, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { LandingComponent } from '../landing/landing.component';

describe('HeaderComponent', () => {
	// beforeEach(() => {
	// 	TestBed.configureTestingModule({
	// 		declarations: [HeaderComponent, HamburguerIconComponent],
	// 		providers: [Router],
	// 		imports: [
	// 			RouterTestingModule.withRoutes(
	// 				[
	// 					{ path: '', redirectTo: 'pokedex', pathMatch: 'full' }, // git  this must be changed !!
	// 					{ path: 'landing', component: LandingComponent },
	// 				]
	// 			)
	// 		]
	// 	}).compileComponents();
	// });
	// it('Component Header works!', () => {
	// 	let fixture = TestBed.createComponent(HeaderComponent);
	// 	let component = fixture.debugElement.componentInstance;
	// 	expect(component).toBeTruthy();
	// });
});
