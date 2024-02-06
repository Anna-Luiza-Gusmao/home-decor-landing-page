import { styled } from "styled-components"

export const ImageContainer = styled.section`
    overflow: hidden;
    position: relative;
`

export const AppearingImage = styled.img<{$isVisible: boolean, $porcent: string}>`
    width: 100%;
    height: 100%;
    opacity: ${props => (props.$isVisible ? 1 : 0)};
    transform: translateX(${props => (props.$isVisible ? 0 : props.$porcent)});
    transition: opacity 0.8s ease, transform 0.8s ease;
    object-fit: cover;
`