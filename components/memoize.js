import * as React from 'react';
import { getItems } from '../places/utils';
import { Container, ListItem, Input } from '../places/styles';

function Card({ visitPlace, visited, id, title, subtitle, code }) {
	const handleClick = () => {
		visitPlace(id);
	};

	return (
		<ListItem active={visited} onClick={handleClick}>
			<h3>{title}</h3>
			<p>{subtitle}</p>
		</ListItem>
	);
}

Card = React.memo(Card);

function App() {
	const [inputValue, setInputValue] = React.useState('');
	const [places, setPlaces] = React.useState(getItems(inputValue));

	React.useEffect(() => {
		setPlaces(getItems(inputValue));
	}, [inputValue]);

	const visitPlace = React.useCallback(id => {
		setPlaces(prevPlaces => {
			let allPlaces = [...prevPlaces];
			const index = allPlaces.findIndex(place => place.id === id);
			allPlaces[index].visited = !allPlaces[index].visited;
			return allPlaces;
		});
	}, []);

	return (
		<>
			<h3>Find your next stop...</h3>
			<Input
				type='text'
				placeholder='Enter a state name'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<Container>
				{places.map(({ state, country, visited, id }) => (
					<Card
						key={id}
						id={id}
						visitPlace={visitPlace}
						visited={visited}
						title={state}
						subtitle={country}
					/>
				))}
			</Container>
		</>
	);
}

export default App;
