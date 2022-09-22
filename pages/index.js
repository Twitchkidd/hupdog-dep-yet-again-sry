import Head from 'next/head';
import Panel from 'components/Panel';
import UnderConstruction from 'components/UnderConstruction';

export default function Home() {
	const initDelay = 1;
	// [[delay, duration]]
	const panels = [
		[0, 1],
		[0.6, 1],
		[1, 0.9],
		[2.2, 1],
		[2.9, 0.8],
		[3.2, 0.8],
		[3.5, 0.7],
		[3.7, 0.6],
		[3.8, 0.5],
		[3.9, 0.4],
	];
	const hue = 304;
	const sat = 62;
	const top = 90;
	const bottom = 10;
	const renderPanels = () =>
		panels.map((p, i) => (
			<Panel
				z={panels.length - i}
				h={hue}
				s={sat}
				l={10 + (80 / panels.length) * i}
				del={initDelay + p[0]}
				dur={p[1]}
				key={i}
			/>
		));
	return (
		<>
			<Head>
				<title>HupDog</title>
				<meta name='description' content='Integrity little home on the Web' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{renderPanels()}
			<UnderConstruction />
		</>
	);
}
