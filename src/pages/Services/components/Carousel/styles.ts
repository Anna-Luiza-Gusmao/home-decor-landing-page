import styled from "styled-components"

export const CarouselContainer = styled.section`
	position: relative;
	overflow: hidden;

	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

export const CarouselButton = styled.button<{ $isLeft: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: ${(props) => props.theme.colors["beige-600"]};
	color: ${(props) => props.theme.colors.white};
	font-size: 1.5rem;
	border: none;
	padding: 1rem;
	cursor: pointer;
	z-index: 1;
	transition: opacity 0.3s;

	left: ${(props) => props.$isLeft && 0};
	right: ${(props) => !props.$isLeft && 0};

	&:hover {
		opacity: 0.7;
	}
`

export const CarouselImage = styled.img`
	width: calc(100% / 4);
	height: auto;
	display: block;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`
