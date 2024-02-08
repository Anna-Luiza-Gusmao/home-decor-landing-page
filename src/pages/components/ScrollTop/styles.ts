import styled from "styled-components"

export const ScrollToTopButton = styled.button<{$isVisible: boolean}>`
	position: fixed;
	bottom: 1.25rem;
	right: 1.25rem;
	background-color: ${props => props.theme.colors["beige-200"]};
	color: ${props => props.theme.colors["black-400"]};
	border: none;
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
	display: ${props => props.$isVisible ? "flex" : "none"};
	opacity: ${props => props.$isVisible ? 1 : 0};
    transition: opacity 0.6s ease-in-out, color 0.4s ease-out, background-color 0.4s ease-out;

    &:hover {
        background-color: ${props => props.theme.colors["beige-500"]};
        color: ${props => props.theme.colors.white};
    }
`