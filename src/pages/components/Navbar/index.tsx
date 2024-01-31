import { ButtonsContainer, ContactButton, NavbarContent, PatternsButton } from "./styles"

export function Navbar() {
    return (
        <NavbarContent>
            <h1>homedecor</h1>

            <ButtonsContainer>
                <PatternsButton>Sobre</PatternsButton>
                <PatternsButton>Serviços</PatternsButton>
                <PatternsButton>Decorações</PatternsButton>
                <ContactButton>Contato</ContactButton>
            </ButtonsContainer>
        </NavbarContent>
    )
}