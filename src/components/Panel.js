import styled from 'styled-components';

const Panel = styled.div`
	position: absolute;
	inset: 0;
	z-index: ${props => props.z + 2};

	display: grid;
	place-items: center;

	height: 100vh;
	width: 100vw;
	background-color: hsl(${props => `${props.h} ${props.s}% ${props.l}%`});

	animation-duration: ${props => props.dur}s;
	animation-fill-mode: forwards;
	animation-name: slideOut;
	animation-delay: ${props => props.del}s;
`;

export default Panel;
