import { useNavigate } from "react-router-dom"
import { ButtonsContainer, ContactButton, NavbarContent, PatternsButton } from "./styles"

export function Navbar() {
    const navigate = useNavigate()

    const navigateToPath = (path: string) => {
        navigate(path)
    }

    return (
        <NavbarContent>
            <h1 onClick={() => navigateToPath("/")}>homedecor</h1>

            <ButtonsContainer>
                <PatternsButton>Sobre</PatternsButton>
                <PatternsButton onClick={() => navigateToPath("servicos")}>Serviços</PatternsButton>
                <PatternsButton>Decorações</PatternsButton>
                <ContactButton>Contato</ContactButton>
            </ButtonsContainer>
        </NavbarContent>
    )
}