import * as React from 'react';
import { useVirtual } from 'react-virtual';
import { getItems } from '../places/utils';

function Card({ visitPlace, visited, state, country, id, style, size, start }) {
	function handleClick() {
		visitPlace(id);
	}
	return (
		<li
			className={`card ${
				visited
					? 'card-active'
					: id % 2 === 0
					? 'card-inactive-even'
					: 'card-inactive-odd'
			}`}
			onClick={handleClick}
			style={{
				height: `${size}px`,
				transform: `translateY(${start}px)`,
			}}
		>
			<h3>{state}</h3>
			<p>{country}</p>
		</li>
	);
}

Card = React.memo(Card);

function App() {
	const parentRef = React.useRef();
	const [inputValue, setInputValue] = React.useState('');

	const allPlaces = React.useMemo(() => getItems(inputValue), [inputValue]);
	const [places, setPlaces] = React.useState(allPlaces);

	React.useEffect(() => {
		setPlaces(allPlaces);
	}, [allPlaces]);

	const visitPlace = React.useCallback(id => {
		setPlaces(prevPlaces => {
			let newPlaces = [...prevPlaces];
			const index = newPlaces.findIndex(place => place.id === id);
			newPlaces[index].visited = !newPlaces[index].visited;
			return newPlaces;
		});
	}, []);

	const { totalSize, virtualItems } = useVirtual({
		size: places.length,
		parentRef,
		estimateSize: React.useCallback(() => 120, []),
		overscan: 5,
	});

	return (
		<>
			<h3>Find your next stop...</h3>
			<input
				className='input-box'
				type='text'
				placeholder='Enter a state or country name'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<div className='container' ref={parentRef}>
				<ul
					className='menu'
					style={{
						height: `${totalSize}px`,
					}}
				>
					{virtualItems.map(({ index, start, size }) => {
						const props = { ...places[index], visitPlace, size, start };
						return <Card key={places[index].id} {...props} />;
					})}
				</ul>
			</div>
		</>
	);
}

export default App;
