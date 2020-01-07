import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as L from 'leaflet';
import { Pokemon } from '../../../interface/pokemon.interface';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
	selector: 'app-pokemon-map',
	templateUrl: './pokemon-map.component.html',
	styleUrls: ['./pokemon-map.component.scss'],
})
export class PokemonMapComponent implements OnInit {
	map: any;
	pokemons: Pokemon[];
	selectedPokemon = 0;

	constructor(
		private route: ActivatedRoute,
		private pokedexService: PokedexService
	) {}

	public pokemonSelected: object;

	changePokemon() {
		this.selectedPokemon++;
		this.map.flyTo(
			[
				this.pokemons[this.selectedPokemon].coord.lat,
				this.pokemons[this.selectedPokemon].coord.long,
			],
			13
		);
	}

	ngOnInit() {
		console.log(
			'pokemon-map component works!, it must display in the console (...) the pokemon clicked on the list'
		);

		// this works equal to pokemon-cards component, it takes the id from the url and checks for the pokemon with this "id"
		this.route.params.subscribe((params: Params) => {
			const id = params['id'] - 1;
			this.pokedexService.pokemonsLoaded.subscribe((data: Pokemon[]) => {
				this.pokemonSelected = data[id];
			});
			this.pokemonSelected = this.pokedexService.getPokemon(id);
			console.log(this.pokemonSelected);
		});

		// var mymap = L.map('map').setView([51.505, -0.09], 13);
		// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		// 	maxZoom: 18,
		// 	id: 'mapbox/streets-v11',
		// 	accessToken: 'your.mapbox.access.token'
		// }).addTo(mymap);

		const options = { attributionControl: false };
		const map = L.map('map', options)
			.setView
			// [this.pokemonSelected.coord.lat, this.pokemonSelected.coord.long],
			// 13
			();
		const tileLayer = L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
			{
				attribution: '[...] GIS User Community',
				/* 'Tiles &copy; Esri &mdash; 
		Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, 
		Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',*/
			}
		);
		tileLayer.addTo(map);

		// this used to work:
		// this.pokedexService.pokemonsLoaded.subscribe((pokemons: Pokemon[]) => {
		// 	this.pokemons = pokemons;
		// 	// Leaflet setting
		// 	const options = { attributionControl: false };
		// 	const map = L.map('map', options).setView(
		// 		[
		// 			pokemons[this.selectedPokemon].coord.lat,
		// 			pokemons[this.selectedPokemon].coord.long,
		// 		],
		// 		13
		// 	);
		// 	const tileLayer = L.tileLayer(
		// 		'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
		// 		{
		// 			attribution: '[...] GIS User Community',
		// 			/* 'Tiles &copy; Esri &mdash;
		//     Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping,
		//     Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',*/
		// 		}
		// 	);
		// 	tileLayer.addTo(map);

		// 	pokemons.forEach(pokemon => {
		// 		const pokemonIcon = L.icon({
		// 			iconUrl: pokemon.imagePath,
		// 			iconSize: 70,
		// 			shadowUrl: '../../../assets/img/iconShadow.png',
		// 			shadowSize: 70,
		// 			popupAnchor: [0, -35],
		// 		});
		// 		const marker = L.marker([pokemon.coord.lat, pokemon.coord.long], {
		// 			icon: pokemonIcon,
		// 		}).bindPopup(pokemon.name, { closeButton: false });
		// 		marker.on('mouseover', () => {
		// 			marker.openPopup();
		// 		});
		// 		marker.on('click', event => {
		// 			// Extact the pokemon number using the imagePath
		// 			console.log(event.target._icon.src.match(/\d+/)[0]);
		// 		});
		// 		marker.on('mouseout', () => {
		// 			marker.closePopup();
		// 		});
		// 		marker.addTo(map);
		// 	});

		// 	this.map = map;
		// });
	}
}
