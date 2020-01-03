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
export class PokemonMapComponent implements OnInit, OnChanges {
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

	ngOnChanges() {
		console.log('something has happend!');
	}

	ngOnInit() {
		console.log('something has happend!');
		this.pokedexService.pokemonsLoaded.subscribe((pokemons: Pokemon[]) => {
			this.pokemons = pokemons;
			// Leaflet setting
			const options = { attributionControl: false };
			const map = L.map('map', options).setView(
				[
					pokemons[this.selectedPokemon].coord.lat,
					pokemons[this.selectedPokemon].coord.long,
				],
				13
			);
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

			pokemons.forEach(pokemon => {
				const pokemonIcon = L.icon({
					iconUrl: pokemon.imagePath,
					iconSize: 70,
					shadowUrl: '../../../assets/img/iconShadow.png',
					shadowSize: 70,
					popupAnchor: [0, -35],
				});
				const marker = L.marker([pokemon.coord.lat, pokemon.coord.long], {
					icon: pokemonIcon,
				}).bindPopup(pokemon.name, { closeButton: false });
				marker.on('mouseover', () => {
					marker.openPopup();
				});
				marker.on('click', event => {
					// Extact the pokemon number using the imagePath
					console.log(event.target._icon.src.match(/\d+/)[0]);
				});
				marker.on('mouseout', () => {
					marker.closePopup();
				});
				marker.addTo(map);
			});

			this.map = map;
		});
	}
}
