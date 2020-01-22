// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TagBoxComponent } from './tag-box.component';
// import { PokedexService } from 'src/app/services/pokedex.service';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { Content } from '@angular/compiler/src/render3/r3_ast';

// describe('Testing component: TagBoxComponent', () => {
// 	let component: TagBoxComponent;
// 	let fixture: ComponentFixture<TagBoxComponent>;

// 	beforeEach(async((): void => {
// 		TestBed.configureTestingModule({
// 			declarations: [TagBoxComponent],
// 			providers: [PokedexService, HttpClient, HttpHandler],
// 		}).compileComponents();
// 	}));

// 	beforeEach((): void => {
// 		fixture = TestBed.createComponent(TagBoxComponent);
// 		component = fixture.componentInstance;
// 		fixture.detectChanges();
// 	});

// 	it('# component should be created', (): void => {
// 		expect(component).toBeTruthy();
// 	});

// 	it('# getColor // random type generate during the test should return the correct color', (): void => {
// 		// setup
// 		const randomPosition: number =
// 			Math.random() * component.pokemonTypes.length;
// 		const typeToCheck: string = component.pokemonTypes[randomPosition];
// 		const colorExpected: string = component.pokemonColors[typeToCheck];

// 		// exercise
// 		const result: string = component.getColor(typeToCheck);

// 		// verify
// 		expect(result).toBe(colorExpected);
// 	});
// });
