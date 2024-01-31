import styled from "styled-components"

export const NavbarContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 2rem;
    background-color: ${props => props.theme.colors["beige-200"]};

    h1 {
        font-size: 2rem;
    }
`

export const ButtonsContainer = styled.section`
    display: flex;
    gap: 1.75rem;
`

const PatternNavbarButton = styled.button`
    all: unset;
    font-weight: 500;
    font-size: 1.125rem;
    padding: 0.75rem 2rem;
    border: 1px solid transparent;

    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;

    &:hover {
        cursor: pointer;
    }
`

export const PatternsButton = styled(PatternNavbarButton)`
    position: relative;
    background: none;
    transition-property: color;
    border-radius: 6px;

    &:focus,
    &:hover {
        color: ${props => props.theme.colors["beige-600"]};
    }

    &:focus:after,
    &:hover:after {
        width: 100%;
        left: 0%;
    }

    &:after {
        content: "";
        pointer-events: none;
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: ${props => props.theme.colors["beige-600"]};
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    }
`

export const ContactButton = styled(PatternNavbarButton)`
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors["beige-600"]};  
    border-radius: 32px;
    transition-property: background-color;

    &:hover {
        background: none;
        color: ${props => props.theme.colors["beige-600"]};  
        border: 1px solid ${props => props.theme.colors["beige-600"]};
    }
`