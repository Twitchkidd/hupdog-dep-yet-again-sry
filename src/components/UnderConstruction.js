import styled from 'styled-components';

const Main = styled.main`
	display: grid;
	place-items: center;

	position: absolute;
	inset: 0;
	z-index: 0;

	min-height: 100vh;
	background-color: hsl(240 18% 90%);
	/* background: var(--white); */

	color: hsl(240 18% 10%);
`;

const Tilt = styled.span`
	display: inline-block;
	transform: rotate(${props => (props.ccw ? '-5deg' : '10deg')});
`;

const UnderConstruction = () => (
	<Main>
		<h1>HupDog</h1>
		<p>
			<Tilt ccw>Website</Tilt> <Tilt>under</Tilt> <Tilt ccw>construction!</Tilt>
		</p>
		<a href="mailto:integritysunbear@gmail.com&subject=What's%20HupDog?">
			Email!
		</a>
	</Main>
);

export default UnderConstruction;
