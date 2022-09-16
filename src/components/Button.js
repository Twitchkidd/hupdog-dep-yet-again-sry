import styled from 'styled-components';

const Button = styled.button`
	min-height: 2rem;
	min-width: 66vw;
	padding: 2rem;
	border: none;
	background-color: var(--green);

	color: var(--white);
	font-size: 2rem;

	border-radius: 4rem;

	&:hover {
		background-color: var(--green-600);

		transition: 0.7s;
	}

	&:focus {
		outline-color: transparent;
		outline-style: solid;

		transition: 0.7s;

		box-shadow: 0 0 0 4px var(--green-400);
	}

	&:active {
		background-color: var(--green-700);

		scale: 1.1;
		transition: 0.2s;
	}
`;

export default ({ children }) => <Button type='button'>{children}</Button>;
