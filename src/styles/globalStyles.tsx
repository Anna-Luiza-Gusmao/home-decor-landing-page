import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.white};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        overflow-y: auto;

        scrollbar-width: auto;
        scrollbar-color: ${props => props.theme.colors["black-400"]} ${props => props.theme.colors["black-400"]};
      
        &::-webkit-scrollbar {
            width: 0.75rem;
        }
      
        &::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors["black-400"]};
            border-radius: 8px;
        }
      
        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.colors["black-400"]};
            border-radius: 8px;
        }
    }
    
    body, input, textarea, button, a, select, option {
        font-family: 'Heebo', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme.colors["black-400"]};
    }

    :focus {
        outline: 4px auto -webkit-focus-ring-color;
    }
`