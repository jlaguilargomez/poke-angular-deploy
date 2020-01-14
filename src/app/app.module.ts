import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ButtonArrowComponent } from './shared/components/button-arrow/button-arrow.component';
import { ComponentsModule } from './shared/components/components.module';

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
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		ComponentsModule,
	],
	providers: [PokedexService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
