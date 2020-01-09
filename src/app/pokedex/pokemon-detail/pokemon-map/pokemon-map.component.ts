import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as L from 'leaflet';
import { Pokemon } from '../../../interface/pokemon.interface';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
	selector: 'app-pokemon-map',
	templateUrl: './pokemon-map.component.html',
	styleUrls: ['./pokemon-map.component.scss'],
})
export class PokemonMapComponent implements OnInit {
	private map;
	private pokemons: Pokemon[] = this.pokedexService.getPokemonList();
	private initializedSelection = false;
	private pokemonSelected: Pokemon;

	constructor(
		private routerData: ActivatedRoute,
		private router: Router,
		private pokedexService: PokedexService
	) {}

	private changePokemon() {
		this.map.flyTo(
			[this.pokemonSelected.coord.lat, this.pokemonSelected.coord.long],
			15
		);
	}

	ngOnInit() {
		// this works equal to pokemon-cards component, it takes the id from the url and checks for the pokemon with this "id"
		this.routerData.params.subscribe((params: Params) => {
			this.pokemonSelected = this.pokedexService.getPokemon(params['id'] - 1);
			if (this.initializedSelection) {
				this.changePokemon();
			}
			this.initializedSelection = true;
		});

		// Leaflet setting
		const options = { attributionControl: false };
		const map = L.map('map', options).setView(
			[this.pokemonSelected.coord.lat, this.pokemonSelected.coord.long],
			15
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

		// Map icons settings incluiding pop-up funcionalities
		this.pokemons.forEach(pokemon => {
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
			// Pop-up with the pokemon name
			marker.on('mouseover', () => {
				marker.openPopup();
			});
			marker.on('mouseout', () => {
				marker.closePopup();
			});
			// Change selected Pokemon
			marker.on('click', event => {
				this.router.navigate([
					'pokedex',
					event.target._icon.src.match(/\d+/)[0],
				]);
			});
			marker.addTo(map);
		});

		this.map = map;
	}
}
