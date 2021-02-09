import * as React from 'react';
import { getItems } from '../cities/filter-cities';
import { Container, ListItem } from '../cities/styles';

function App() {
	const [inputValue, setInputValue] = React.useState('');
	const [cities, setCities] = React.useState(getItems(inputValue));
	console.log(cities);

	const visitCity = React.useCallback(id => {
		setCities(prevCities => {
			let allCities = [...prevCities];
			allCities[id].visited = !allCities[id].visited;
			return allCities;
		});
	}, []);

	return (
		<>
			<div>
				<label htmlFor='city'>Find a city</label>
				<input
					type='text'
					id='city'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
			</div>
			<Container>
				{cities.map(({ city, state, visited, id }) => (
					<ListItem key={id} onClick={() => visitCity(id)} active={visited}>
						<ListItem.Title>{city}</ListItem.Title>
						<ListItem.Subtitle>{state}</ListItem.Subtitle>
					</ListItem>
				))}
			</Container>
		</>
	);
}

export default React.memo(App);
