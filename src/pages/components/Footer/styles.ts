import styled from "styled-components"

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;

	padding: 5rem;
	background-color: ${(props) => props.theme.colors["beige-600"]};
	color: ${(props) => props.theme.colors.white};

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		h2 {
			font-size: 1.75rem;
		}
	}
`

export const NavigableLinkBox = styled.section`
	display: flex;
	gap: 4rem;
	
	a {
		text-decoration: none;
		font-weight: 200;
		color: ${(props) => props.theme.colors.white};
		transition: font-weight 0.1s;

		&:hover {
			font-weight: 400;
		}
	}
`

export const SocialMediaBox = styled.section`
	display: flex;
	gap: 1.5rem;

	svg {
		transition: color 0.5s ease-out;

		&:hover {
			cursor: pointer;
			color: ${(props) => props.theme.colors["beige-100"]};
		}
	}
`
