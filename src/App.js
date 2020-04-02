import React from 'react';
import styled from 'styled-components';

import './App.module.scss';

function App() {
	return (
		<div className='App'>
			<Title>Hello there!</Title>
		</div>
	);
}

const Title = styled.h1`
	font-size: 3.5rem;
	text-align: center;
	color: palevioletred;
`;

export default App;
