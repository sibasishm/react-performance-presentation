import { matchSorter } from 'match-sorter';
import cities from './indian-cities.json';

const allItems = cities.map((city, index) => ({
	...city,
	id: String(index),
	visited: false,
}));

export function getItems(filter) {
	if (!filter) {
		return allItems;
	}
	return matchSorter(allItems, filter, {
		keys: ['city'],
	});
}
