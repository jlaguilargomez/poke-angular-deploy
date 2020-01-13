export interface Pokemon {
	id: number;
	name: string;
	type: string[];
	height: number;
	weight: number;
	stats: { name: string; base: number }[];
	moves: string[];
	ability: string[];
	imagePath: string;
	coord: { lat: number; long: number };
}
