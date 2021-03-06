import * as React from 'react';

import WorldMap from '../world-map';
// const WorldMap = React.lazy(() => import('../world-map'));

function App() {
	const [showMap, setShowMap] = React.useState(false);
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '100%',
			}}
		>
			<label style={{ marginBottom: '1rem' }}>
				<input
					type='checkbox'
					checked={showMap}
					onChange={e => setShowMap(e.target.checked)}
				/>
				{' show world map'}
			</label>
			<div style={{ width: 1000, height: 500 }}>
				{/* <React.Suspense fallback={<p>Loading...</p>}> */}
				{showMap ? <WorldMap /> : null}
				{/* </React.Suspense> */}
			</div>
		</div>
	);
}

export default App;
