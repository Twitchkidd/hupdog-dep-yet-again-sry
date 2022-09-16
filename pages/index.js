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
			<Button>
				<strong>Button!</strong>
			</Button>
			{/* <h1>Header 1</h1>
			<h2>Header 2</h2>
			<h3>Header 3</h3>
			<h4>Header 4</h4>
			<h5>Header 5</h5>
			<h6>Header 6</h6>
			<p>Paragraph tag.</p>
			<ul>
				<li>List item</li>
				<li>List item</li>
				<li>List item</li>
				<li>List item</li>
				<li>List item</li>
			</ul> */}
		</div>
	);
}
