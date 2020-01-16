import { Injectable, OnInit } from '@angular/core';
import { Member } from '../models/member.interface';
import { Functionality } from '../models/functionality.interface';

@Injectable({
	providedIn: 'root',
})
export class LandingService {
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
			title: 'And catch em all!',
			img: 'assets/img/functionality-3.jpg',
			info:
				'Explore the world around you and catch all the Pokemon availables!',
		},
	];

	constructor() {}

	public getMembers(): Member[] {
		return this.team;
	}

	public getFunctionalities(): Functionality[] {
		return this.functionalities;
	}
}
