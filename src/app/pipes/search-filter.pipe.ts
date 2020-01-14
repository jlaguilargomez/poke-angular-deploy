import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'searcherFilter',
})
export class SearchFilterPipe implements PipeTransform {
	transform(pokemonsArray, searchTerm: string) {
		if (!pokemonsArray || !searchTerm) {
			// console.log(pokemonsArray);
			return pokemonsArray;
		} else {
			return pokemonsArray.filter(
				pokemon =>
					pokemon.name
						.toLowerCase()
						.indexOf(searchTerm.toLowerCase()) !== -1
			);
		}
	}
}
