import { Component, OnInit } from '@angular/core';

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
	private team: object[] = [
		{
			name: 'Jose Angel Cívico Martos',
			img: '../../assets/img/icon-profile1.png',
			position: 'Software Developer',
		},
		{
			name: 'Gabriel García Rodríguez',
			img: '../../assets/img/icon-profile2.png',
			position: 'Software Developer',
		},
		{
			name: 'Guadalupe García Plaza',
			img: '../../assets/img/icon-profile3.png',
			position: 'Software Developer',
		},
		{
			name: 'Jose Luis Aguilar Gómez',
			img: '../../assets/img/icon-profile4.png',
			position: 'Software Developer',
		},
		{
			name: 'Juan Pablo Amador Díaz',
			img: '../../assets/img/icon-profile5.png',
			position: 'Software Developer',
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
