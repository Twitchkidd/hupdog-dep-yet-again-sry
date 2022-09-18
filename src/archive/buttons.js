import Head from 'next/head';
import Button from 'components/Button';

export default function Home() {
	return (
		<div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
			<Head>
				<title>HupDog! - Home</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>HupDog</h1>
			<Button green>
				<strong>Running</strong>
			</Button>
			<Button blue>Coding</Button>
			<Button pink>Coffee</Button>
			<Button purple>
				<strong>Dog</strong>
			</Button>
			<Button>Some Button</Button>
		</div>
	);
}
