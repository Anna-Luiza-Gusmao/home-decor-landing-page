import { styled } from "styled-components"

export const CustomerBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;

	padding: 10rem;
	padding-bottom: 16rem;

	h3 {
		font-size: 1.5rem;
		color: ${(props) => props.theme.colors["gray-300"]};
		text-transform: uppercase;
	}
`

export const CustomersGrid = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	svg {
		color: ${(props) => props.theme.colors["gray-300"]};
		transition: color 0.5s ease-out;

		&:hover {
			color: ${(props) => props.theme.colors["beige-100"]};
		}
	}
`

export const CustomerTestimonialContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	column-gap: 6rem;
	padding: 4rem;
`

export const CustomerTestimonialBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	svg {
		color: ${(props) => props.theme.colors["beige-100"]};
	}

	span {
		width: 100%;
		height: 0.15rem;
		border-radius: 8px;
		background-color: ${(props) => props.theme.colors["beige-100"]};
	}

	p {
		font-weight: 600;
	}

	div {
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			object-fit: cover;
		}

		div {
			display: flex;
			flex-direction: column;

			& {
				gap: 0;
				align-items: flex-start;

				p:nth-child(1) {
					padding-bottom: 0.25rem;
				}

				p:nth-child(2) {
					font-weight: 500;
					font-size: 0.875rem;
					color: ${(props) => props.theme.colors["gray-300"]};
				}
			}
		}
	}
`
