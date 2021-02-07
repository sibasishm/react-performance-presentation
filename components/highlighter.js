import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Highlighter({ children }) {
	return (
		<SyntaxHighlighter language='javascript' style={nightOwl}>
			{children}
		</SyntaxHighlighter>
	);
}
