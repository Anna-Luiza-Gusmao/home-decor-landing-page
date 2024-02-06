import { styled } from "styled-components"

export const ServicesContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

export const CoverBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;

	img {
		width: 100%;
		height: 50rem;
		object-fit: cover;
	}

	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 8rem;
		border-radius: 16px;
		padding: 4rem;
		margin-top: -2rem;
		background-color: ${(props) => props.theme.colors["beige-100"]};
		box-shadow: 0px 8px 21px -7px ${(props) => props.theme.colors["beige-600"]};

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: ${(props) => props.theme.colors["beige-600"]};

			h2 {
				font-size: 1.75rem;
			}

			p {
				font-size: 3.5rem;
				font-weight: 600;
			}
		}
	}
`

export const CarouselBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	padding: 8rem 4rem;
	text-align: center;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 500;
		color: ${(props) => props.theme.colors["gray-300"]};
	}

	span {
		display: block;
		width: 70%;
		border: 0.15rem solid ${(props) => props.theme.colors["gray-300"]};
		border-radius: 6px;
	}
`

export const ServicesBox = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 10rem;
	row-gap: 10rem;

	padding: 8rem 16rem;
`

export const ServicesItens = styled.div`
	display: flex;
	gap: 4rem;
	align-items: center;
`

export const ServicesIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6rem;
	height: 6rem;
	background-color: ${(props) => props.theme.colors["beige-100"]};
	border-radius: 4rem;
	padding: 2rem;

    box-shadow: 0px 8px 21px -7px ${(props) => props.theme.colors["beige-600"]};
`

export const ServicesDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
        font-size: 1.25rem;
    }
`