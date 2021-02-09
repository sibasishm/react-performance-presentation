import * as React from 'react';
import { getItems } from '../cities/filter-cities';
import { Container, ListItem } from '../cities/styles';

function CityCard({ visitCity, visited, id, title, subtitle }) {
	const handleClick = () => {
		visitCity(id);
	};

	return (
		<ListItem active={visited} onClick={handleClick}>
			<h3>{title}</h3>
			<p>{subtitle}</p>
		</ListItem>
	);
}

CityCard = React.memo(CityCard);

function App() {
	const [inputValue, setInputValue] = React.useState('');
	const [cities, setCities] = React.useState(getItems(inputValue));

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
					<CityCard
						key={id}
						id={id}
						visitCity={visitCity}
						visited={visited}
						title={city}
						subtitle={state}
					/>
				))}
			</Container>
		</>
	);
}

export default App;
