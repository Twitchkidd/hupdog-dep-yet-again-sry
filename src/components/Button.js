import styled from 'styled-components';

const ButtonEl = styled.button`
	min-height: 2rem;
	min-width: 66vw;
	padding: 2rem;
	border: ${props =>
		props.green || props.blue || props.pink || props.purple
			? 'none'
			: '4px solid var(--black)'};
	background-color: ${props =>
		props.green
			? 'var(--green)'
			: props.blue
			? 'var(--blue)'
			: props.pink
			? 'var(--pink)'
			: props.purple
			? 'var(--purple)'
			: 'transparent'};

	color: ${props =>
		props.green || props.purple ? 'var(--white)' : 'var(--black)'};
	font-size: 2rem;

	border-radius: 4rem;

	&:hover {
		background-color: ${props =>
			props.green
				? 'var(--green-shade-400)'
				: props.blue
				? 'var(--blue-shade-400)'
				: props.pink
				? 'var(--pink-shade-400)'
				: props.purple
				? 'var(--purple-shade-400)'
				: 'var(--gray)'};

		transition: 0.4s;
	}

	&:focus {
		outline-color: transparent;
		outline-style: solid;

		transition: 0.2s;

		box-shadow: 0 0 0 4px
			${props =>
				props.green
					? 'var(--green-tint-400)'
					: props.blue
					? 'var(--blue-tint-400)'
					: props.pink
					? 'var(--pink-tint-400)'
					: props.purple
					? 'var(--purple-tint-400)'
					: 'var(--blue-tint-400)'};
	}

	&:active {
		background-color: ${props =>
			props.green
				? 'var(--green-shade-600)'
				: props.blue
				? 'var(--blue-shade-700)'
				: props.pink
				? 'var(--pink-shade-600)'
				: props.purple
				? 'var(--purple-shade-600)'
				: 'var(--black)'};

		${props => (props.green || props.purple ? null : 'color: var(--white);')}

		scale: 1.1;
		transition: 0.2s;
	}
`;

const Button = ({ children, ...rest }) => (
	<ButtonEl type='button' {...rest}>
		{children}
	</ButtonEl>
);

export default Button;
