import { matchSorter } from 'match-sorter';
import countries from './states.json';

const allItems = countries
	.map(data =>
		data.states.map(state => ({
			state,
			country: data.country,
			visited: false,
		}))
	)
	.flat()
	.map((state, index) => ({ ...state, id: String(index) }));

export function getItems(filter) {
	if (!filter) {
		return allItems;
	}
	return matchSorter(allItems, filter, {
		keys: ['state', 'country'],
	});
}
