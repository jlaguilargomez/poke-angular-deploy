import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.interface';
import { Functionality } from 'src/app/models/functionality.interface';
import { LandingService } from 'src/app/services/landing.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	pokemons: string[] = [];
	team: Member[] = [];
	functionalities: Functionality[] = [];
	currentPokemon: string;
	oldPokemon: string;
	imgSource: string;

	constructor(private landingService: LandingService) {
		this.team = this.landingService.getMembers();
		this.functionalities = this.landingService.getFunctionalities();
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
