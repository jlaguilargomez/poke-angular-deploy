import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonListComponent } from './components/pokedex/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokedex/pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './components/pokedex/pokemon-detail/pokemon-card/pokemon-card.component';
import { PokemonMapComponent } from './components/pokedex/pokemon-detail/pokemon-map/pokemon-map.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HamburguerIconComponent } from './shared/components/header/hamburguer-icon/hamburguer-icon.component';
import { AppRoutingModule } from './app-routing.module';
import { PokedexService } from './services/pokedex.service';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		PokedexComponent,
		PokemonListComponent,
		PokemonDetailComponent,
		PokemonCardComponent,
		PokemonMapComponent,
		HeaderComponent,
		FooterComponent,
		SearchFilterPipe,
		HamburguerIconComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
	providers: [PokedexService],
	bootstrap: [AppComponent],
})
export class AppModule {}
