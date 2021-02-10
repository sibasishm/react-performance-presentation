import styled from 'styled-components';

export const Container = styled.ul`
	list-style-type: none;
	padding: 0;
	width: 60vw;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;
	flex-wrap: wrap;
	height: 500px;
	overflow-y: scroll;
`;

export const ListItem = styled.li`
	background-color: ${props => (props.active ? '#90fea8' : '#f7f7f7')};
	border-radius: 6px;
	padding: 1em 2em;
	border: 2px solid ${props => (props.active ? '#30ae03' : '#8f8f8f')};
	max-height: 360px;

	:hover {
		cursor: pointer;
		background-color: ${props => (props.active ? '#90efa8' : '#eaeaea')};
	}

	> h3 {
		font-size: 1.5rem;
		margin: 0.25em;
	}

	> p {
		font-size: 1rem !important;
		color: #0e0e0e;
	}
`;

export const Input = styled.input`
	font-size: 1.5rem;
	padding: 0.5rem;
	width: 100%;
	color: #0e0e0e;
	border: 2px solid #6a6a6a;
	border-radius: 8px;
`;
