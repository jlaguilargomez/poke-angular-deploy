export interface Pokemon {
	id: number;
	name: string;
	type: string[];
	colorType: string;
	height: number;
	weight: number;
	stats: { name: string; base: number }[];
	moves: string[];
	ability: string[];
	imagePath: string;
	coord: { lat: number; long: number };
}

export interface PokemonTest {
	id: number;
	name: string;
	type: string[];
	height: number;
	weight: number;
	stats: { name: string; base: number }[];
	ability: string[];
	imagePath: string;
}

export interface PokemonAPIData {
	abilities: {
		ability: { name: string; url: string };
		is_hidden: boolean;
		slot: number;
	}[];
	base_experience: number;
	forms: { name: string; url: string }[];
	game_indices: {
		game_index: number;
		version: { name: string; url: string };
	}[];
	height: number;
	held_items: {
		item: { name: string; url: string };
		version_detail: {
			rarity: number;
			version: { name: string; url: string };
		}[];
	}[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: {
		move: { name: string; url: string };
		version_group_details: {
			level_learned_at: number;
			move_learn_method: { name: string; url: string };
			version_group: { name: string; url: string };
		}[];
	}[];
	name: string;
	order: number;
	species: { name: string; url: string };
	sprites: {
		back_defalut: string | null;
		back_female: string | null;
		back_shiny: string | null;
		back_shiny_female: string | null;
		front_default: string | null;
		front_female: string | null;
		front_shiny: string | null;
		front_shiny_female: string | null;
	};
	stats: { base_stat: number; effort: number }[];
	types: { slot: number; type: { name: string; url: string } }[];
	weight: number;
}
