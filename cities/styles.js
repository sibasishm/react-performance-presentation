import styled from 'styled-components';

export const Container = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	height: 500px;
	overflow-y: scroll;
`;

export const ListItem = styled.li`
	flex: 1;
	background-color: ${props => (props.active ? '#90eea8' : '#eaeaea')};
	padding: 1em 5em;
	border-radius: 4px;
	margin: 0.5em;
	border: 2px solid ${props => (props.active ? '#30ae03' : '#afafaf')};

	:hover {
		cursor: pointer;
	}
`;

const Title = styled.h3`
	font-size: 1.5rem;
	margin: 0.25em;
`;

const Subtitle = styled.p`
	font-size: 1rem !important;
	color: #0e0e0e;
`;

ListItem.Title = Title;
ListItem.Subtitle = Subtitle;
