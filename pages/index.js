import Head from 'next/head';
import Panel from 'components/Panel';
import UnderConstruction from 'components/UnderConstruction';

export default function Home() {
	// [[delay/additional delay, duration]]
	const panels = [
		[1, 0.8],
		[0.8, 0.7],
		[0.6, 0.6],
		[1, 0.8],
		[0.4, 0.8],
		[0.3, 0.8],
		[0.2, 0.7],
		[0.1, 0.6],
		[0.1, 0.5],
		[0.1, 0.4],
	];
	const hue = 124;
	const sat = 62;
	const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);
	// console.log(sum(panels.map(p => p[0])));
	// const top = 90; // switch 10 + to 90 - to go the other way
	// const bottom = 10;
	const renderPanels = () =>
		panels.map((p, i) =>
			i === 3 ? (
				<Panel
					z={panels.length - i}
					h={hue}
					s={sat}
					l={(95 / panels.length) * i + 5}
					del={sum(panels.map(p => p[0]).slice(0, i + 1))}
					dur={p[1]}
					key={i}>
					<h1
						style={{
							color: `hsl(${hue} ${sat}% 90%)`,
							fontSize: '3rem',
							textDecoration: `underline hsl(${hue} ${sat}% 90%)`,
						}}>
						HupDog
					</h1>
				</Panel>
			) : (
				<Panel
					z={panels.length - i}
					h={hue}
					s={sat}
					l={(95 / panels.length) * i + 5}
					del={sum(panels.map(p => p[0]).slice(0, i + 1))}
					dur={p[1]}
					key={i}
				/>
			)
		);
	return (
		<>
			<Head>
				<title>HupDog</title>
				<meta name='description' content="Integrity's home on the Web" />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{renderPanels()}
			<UnderConstruction />
		</>
	);
}
