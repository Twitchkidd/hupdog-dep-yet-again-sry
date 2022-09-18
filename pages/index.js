import Head from 'next/head';
import styled from 'styled-components';

const Tilt = styled.span`
	display: inline-block;
	transform: rotate(${props => (props.ccw ? '-5deg' : '10deg')});
`;

export default function Home() {
	return (
		<div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
			<Head>
				<title>HupDog - Home</title>
				<meta name='description' content='Integrity on the Web' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>HupDog</h1>
			<p>
				<Tilt ccw>Website</Tilt> <Tilt>under</Tilt>{' '}
				<Tilt ccw>construction!</Tilt>
			</p>
			<a href="mailto:integritysunbear@gmail.com&subject=What's%20HupDog?">
				Email!
			</a>
		</div>
	);
}
