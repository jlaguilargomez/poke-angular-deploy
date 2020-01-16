import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.interface';
import { Functionality } from 'src/app/models/functionality.interface';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	pokemons: string[] = [];
	currentPokemon: string;
	oldPokemon: string;
	imgSource: string;
	team: Member[] = [
		{
			name: 'Jose Angel Cívico Martos',
			img: '../../assets/img/icon-profile1.png',
			job: 'Software Developer',
		},
		{
			name: 'Gabriel García Rodríguez',
			img: '../../assets/img/icon-profile2.png',
			job: 'Software Developer',
		},
		{
			name: 'Guadalupe García Plaza',
			img: '../../assets/img/icon-profile3.png',
			job: 'Software Developer',
		},
		{
			name: 'Jose Luis Aguilar Gómez',
			img: '../../assets/img/icon-profile4.png',
			job: 'Software Developer',
		},
		{
			name: 'Juan Pablo Amador Díaz',
			img: '../../assets/img/icon-profile5.png',
			job: 'Software Developer',
		},
	];
	functionalities: Functionality[] = [
		{
			num: '1',
			title: 'Search your Pokemon',
			img: 'assets/img/functionality-1.jpg',
			info:
				'You can select the first 151 Pokemons and search them by name',
		},
		{
			num: '2',
			title: 'Analyze your selected Pokemon',
			img: 'assets/img/functionality-2_1.jpg',
			info:
				'Just point the cursor on the card and you will see all the data available: Name, ability, height, weight, types and stats!',
		},
		{
			num: '3',
			title: 'And catch&#8217;em all!',
			img: 'assets/img/functionality-3.jpg',
			info:
				'Explore the world around you and catch all the Pokemon availables!',
		},
	];

	constructor() {
		this.pokemons = [
			'bulbasaur',
			'charmander',
			'ditto',
			'dratini',
			'eevee',
			'gengar',
			'pikachu',
			'poliwhirl',
			'snorlax',
		];
		const num = Math.floor(Math.random() * 9);
		this.currentPokemon = this.pokemons[num];
		if (this.currentPokemon === undefined) {
			console.log(num);
		}
		this.imgSource = 'assets/img/gifs/' + this.currentPokemon + '.gif';
	}

	ngOnInit() {
		// this.updatePokemon();
	}

	updatePokemon() {
		setInterval(() => {
			this.changeSrc();
		}, 3000);
	}

	changeSrc() {
		do {
			this.oldPokemon = this.currentPokemon;
			this.currentPokemon = this.pokemons[Math.floor(Math.random() * 9)];
		} while (this.oldPokemon === this.currentPokemon);
		this.imgSource = 'assets/img/gifs/' + this.currentPokemon + '.gif';
		console.log(this.imgSource);
	}
}
