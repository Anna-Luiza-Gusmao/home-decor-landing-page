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
        background-color: ${props => props.theme.colors["beige-100"]};
        box-shadow: 0px 8px 21px -7px ${props => props.theme.colors["beige-600"]};

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${props => props.theme.colors["beige-600"]};

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