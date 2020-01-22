import { Injectable } from '@angular/core';
import { Member } from '../models/member.interface';
import { Functionality } from '../models/functionality.interface';

@Injectable({
	providedIn: 'root',
})
export class LandingService {
	public team: Member[] = [
		{
			name: 'Jose Angel Cívico Martos',
			img: 'assets/img/personal/angel-photo.jpg',
			job: 'Software Developer',
			linkedin:
				'https://es.linkedin.com/in/jos%C3%A9-%C3%A1ngel-c%C3%ADvico-martos',
			github: 'https://github.com/Gleanx',
			twitter: 'https://twitter.com/drochroma',
		},
		{
			name: 'Gabriel García Rodríguez',
			img: 'assets/img/personal/gabri-photo.jpg',
			job: 'Software Developer',
			linkedin: 'https://es.linkedin.com/in/gabrielgarci',
			github: '',
			twitter: '',
		},
		{
			name: 'Guadalupe García Plaza',
			img: 'assets/img/icon-profile3.png',
			job: 'Software Developer',
			linkedin:
				'https://es.linkedin.com/in/guadalupe-garc%C3%ADa-plaza-91337814a',
			github: '',
			twitter: '',
		},
		{
			name: 'Jose Luis Aguilar Gómez',
			img: 'assets/img/personal/joselu-photo.jpg',
			job: 'Software Developer',
			linkedin: 'https://es.linkedin.com/in/jlaguilargomez',
			github: 'https://github.com/jlaguilargomez',
			twitter: 'https://twitter.com/jlaguilargomez',
		},
		{
			name: 'Juan Pablo Amador Díaz',
			img: 'assets/img/personal/juanpablo-photo.jpeg',
			job: 'Software Developer',
			linkedin: 'https://es.linkedin.com/in/juan-pablo-amador',
			github: '',
			twitter: '',
		},
	];

	public functionalities: Functionality[] = [
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
