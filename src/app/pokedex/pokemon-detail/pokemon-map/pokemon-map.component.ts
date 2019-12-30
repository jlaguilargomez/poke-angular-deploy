import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Pokemon } from '../../../interface/pokemon.interface';

@Component({
  selector: 'app-pokemon-map',
  templateUrl: './pokemon-map.component.html',
  styleUrls: ['./pokemon-map.component.scss'],
})
export class PokemonMapComponent implements OnInit {
  @Input() pokemonObservable;

  map: any;
  pokemons: Pokemon[];
  selectedPokemon: number = 0;

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

  constructor() {}

  ngOnInit() {
    this.pokemonObservable.subscribe(pokemons => {
      this.pokemons = pokemons;

      // Leaflet setting
      let options = { attributionControl: false };
      let map = L.map('map', options).setView(
        [
          pokemons[this.selectedPokemon].coord.lat,
          pokemons[this.selectedPokemon].coord.long,
        ],
        13
      );
      let tileLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          attribution:
            'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }
      );
      tileLayer.addTo(map);

      pokemons.forEach(pokemon => {
        let pokemonIcon = L.icon({
          iconUrl: pokemon.imagePath,
          iconSize: 70,
          shadowUrl: '../../../assets/img/iconShadow.png',
          shadowSize: 70,
          popupAnchor: [0, -35],
        });
        let marker = L.marker([pokemon.coord.lat, pokemon.coord.long], {
          icon: pokemonIcon,
        }).bindPopup(pokemon.name, { closeButton: false });
        marker.on('mouseover', function(event) {
          marker.openPopup();
        });
        marker.on('click', function(event) {
          // Extact the pokemon number using the imagePath
          console.log(event.target._icon.src.match(/\d+/)[0]);
        });
        marker.on('mouseout', function(event) {
          marker.closePopup();
        });
        marker.addTo(map);
      });

      this.map = map;
    });
  }
}
