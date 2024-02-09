import styled from "styled-components"

export const BoxModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 40vw;
	background-color: ${(props) => props.theme.colors.white};

	padding: 4rem;
	border-radius: 6px;
    overflow-y: auto;
`

export const CloseModalButton = styled.button`
	all: unset;
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
    display: flex;
    align-items: center;
    border: 0.15rem solid transparent;

	svg {
		color: ${(props) => props.theme.colors["beige-500"]};
		transition: color 0.4s ease-out;

		&:hover {
			cursor: pointer;
			color: ${(props) => props.theme.colors["beige-600"]};
		}
	}

	&:focus {
		outline: none;
		border: 0.15rem solid ${(props) => props.theme.colors["beige-500"]};
	}
`

export const ContentModal = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;

    header {
        h1 {
            font-weight: 500;
        }
        p {
            font-weight: 400;
            font-size: 1rem;
        }
    }
`

export const InputBox = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

    h3 {
        font-weight: 500;
    }

	input {
		border: none;
		border-bottom: 0.15rem solid ${(props) => props.theme.colors["beige-600"]};
		background-color: ${(props) => props.theme.colors.white};
		padding: 0.5rem 0;

		&::placeholder {
			color: ${(props) => props.theme.colors["beige-500"]};
		}

		&:focus {
			outline: none;
			border-bottom: 0.15rem solid ${(props) => props.theme.colors["beige-500"]};
		}
	}

    textarea {
        border: none;
		border: 0.15rem solid ${(props) => props.theme.colors["beige-600"]};
		background-color: ${(props) => props.theme.colors.white};
		padding: 0.5rem;

        &::placeholder {
			color: ${(props) => props.theme.colors["beige-500"]};
		}

        &:focus {
			outline: none;
			border: 0.15rem solid ${(props) => props.theme.colors["beige-500"]};
		}
    }
`

export const SubmitFormButton = styled.button`
	font-size: 1.125rem;
	letter-spacing: 2px;
	text-transform: uppercase;
	display: inline-block;
	text-align: center;
	font-weight: bold;
	padding: 0.7em 2em;
	border: 2px solid ${(props) => props.theme.colors["beige-600"]};
	border-radius: 2px;
	position: relative;
	color: ${(props) => props.theme.colors["beige-600"]};
	text-decoration: none;
	transition: 0.3s ease all;
	z-index: 1;
	background-color: transparent;

	&:before {
		transition: 0.5s all ease;
		position: absolute;
		top: 0;
		left: 50%;
		right: 50%;
		bottom: 0;
		opacity: 0;
		content: "";
		background-color: ${(props) => props.theme.colors["beige-600"]};
		z-index: -1;
	}

	&:hover,
	&:focus {
		color: white;
		cursor: pointer;
	}

	&:hover:before,
	&:focus:before {
		transition: 0.5s all ease;
		left: 0;
		right: 0;
		opacity: 1;
	}

	&:active {
		transform: scale(0.9);
	}
`