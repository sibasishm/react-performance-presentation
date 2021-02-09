import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export function Highlighter({ children }) {
	return (
		<SyntaxHighlighter
			language='javascript'
			customStyle={{ textAlign: 'left' }}
		>
			{children}
		</SyntaxHighlighter>
	);
}
