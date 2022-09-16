import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>HupDog! - Home</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Header 1</h1>
			<h2>Header 2</h2>
			<h3>Header 3</h3>
			<h4>Header 4</h4>
			<h5>Header 5</h5>
			<h6>Header 6</h6>
			<p>Paragraph tag.</p>
			<ul>
				<li>List items</li>
				<li>List items</li>
				<li>List items</li>
				<li>List items</li>
				<li>List items</li>
			</ul>
		</div>
	);
}
