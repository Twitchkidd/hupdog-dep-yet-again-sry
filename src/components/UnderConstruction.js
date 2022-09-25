import styled from 'styled-components';

const Backdrop = styled.div`
	position: absolute;
	inset: 0;
	z-index: 0;
	background: var(--green-tint-900);
`;

const Main = styled.main`
	display: grid;
	place-items: center;

	height: 100%;
	width: 100%;
	z-index: 1;

	padding: 10vh 0;
	min-height: 100vh;
	background-color: hsl(240 18% 90%);
	border: 20px dotted var(--green-tint-700);

	color: hsl(240 18% 10%);

	& a {
		text-decoration: none;
		color: hsl(240 18% 10%);
		padding: 8px;
		border: 2px solid var(--blue);
		border-radius: 4px;
	}

	& p {
		animation-name: wobble;
		animation-delay: 6s;
		animation-duration: 2.5s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes wobble {
		from {
			transform: rotate(0);
		}

		33% {
			transform: rotate(-10deg);
		}

		66% {
			transform: rotate(10deg);
		}

		to {
			transform: rotate(0);
		}
	}

	opacity: 0;
	animation-name: fadeIn;
	animation-delay: 4.5s;
	animation-duration: 2s;
	animation-fill-mode: forwards;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;

const Tilt = styled.span`
	display: inline-block;

	text-decoration: underline var(--purple);

	transform: rotate(${props => (props.ccw ? '-5deg' : '10deg')});
`;

const UnderConstruction = () => (
	<Backdrop>
		<Main>
			<h1 style={{ textDecoration: 'underline var(--pink)' }}>HupDog</h1>
			<p>
				<Tilt ccw>Website</Tilt> <Tilt>under</Tilt>{' '}
				<Tilt ccw>construction!</Tilt>
			</p>
			<a href="mailto:integritysunbear@gmail.com&subject=What's%20HupDog?">
				Email!
			</a>
		</Main>
	</Backdrop>
);

export default UnderConstruction;
