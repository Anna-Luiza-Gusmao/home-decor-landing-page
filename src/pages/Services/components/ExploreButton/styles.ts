import styled from "styled-components"

export const StyledButton = styled.button`
	font-size: 1.125rem;
	letter-spacing: 2px;
	text-transform: uppercase;
	display: inline-block;
	text-align: center;
	font-weight: bold;
	padding: 0.7em 2em;
	border: 2px solid ${(props) => props.theme.colors["beige-600"]};
	border-radius: 2px;
	position: relative;
	color: ${(props) => props.theme.colors["beige-600"]};
	text-decoration: none;
	transition: 0.3s ease all;
	z-index: 1;
    width: 12rem;
    background-color: transparent;

	&:before {
		transition: 0.5s all ease;
		position: absolute;
		top: 0;
		left: 50%;
		right: 50%;
		bottom: 0;
		opacity: 0;
		content: "";
		background-color: ${(props) => props.theme.colors["beige-600"]};
		z-index: -1;
	}

	&:hover,
	&:focus {
		color: white;
        cursor: pointer;
	}

	&:hover:before,
	&:focus:before {
		transition: 0.5s all ease;
		left: 0;
		right: 0;
		opacity: 1;
	}

	&:active {
		transform: scale(0.9);
	}
`