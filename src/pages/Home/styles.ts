import styled from "styled-components"

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const DescriptionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img {
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        padding: 10rem;

        h2 {
            font-size: 2rem;
        }
    }
`

export const KnowMoreButton = styled.button`
    all: unset;
    font-weight: 500;
    font-size: 1.125rem;
    border: none;
    text-transform: uppercase;

    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    position: relative;
    background: none;
    transition-property: color;
    border-radius: 6px;

    &:focus,
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors["beige-600"]};
    }

    &:focus:after,
    &:hover:after {
        width: 4rem;
        left: 0%;
    }

    &:after {
        content: "";
        pointer-events: none;
        bottom: -2px;
        left: 20%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: ${props => props.theme.colors["beige-600"]};
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    }
`

export const BoxImagesContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    img {
        object-fit: cover;
        width: 100%;
        height: 30rem;
    }
`

export const CustomerTestimonialsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    padding: 12rem;

    h3 {
        font-size: 1.5rem;
        color: ${props => props.theme.colors["gray-300"]};
        text-transform: uppercase;
    }
`

export const TestimonialsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 4rem;
    align-content: center;
`

export const TestimonialContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    text-align: center;

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;
    }
    
    div {
        p:nth-child(1) {
            font-weight: 700;
            padding-bottom: 0.25rem;
        }
        p:nth-child(2) {
            font-size: 0.875rem;
            color: ${props => props.theme.colors["gray-300"]};
        }
    }
`