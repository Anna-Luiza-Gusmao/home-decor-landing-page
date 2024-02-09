import { Modal } from "@mui/material"
import { BoxModal, CloseModalButton, ContentModal, InputBox, SubmitFormButton } from "./styles"
import { X } from "@phosphor-icons/react"

interface IContactMeModalProps {
	openContactMeModal: boolean
	setOpenContactMeModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function ContactMeModal({ openContactMeModal, setOpenContactMeModal }: IContactMeModalProps) {
	const handleCloseContactMeModal = () => {
		setOpenContactMeModal(false)
	}

	return (
		<Modal open={openContactMeModal}>
			<BoxModal>
				<CloseModalButton onClick={handleCloseContactMeModal}>
					<X size={28} />
				</CloseModalButton>
				<ContentModal>
					<header>
						<h1>Entre em contato conosco!</h1>
						<p>Nos envie algumas de suas informações básicas para entrarmos em contato com você.</p>
					</header>

					<InputBox>
						<h3>Nome Completo</h3>
						<input type="text" placeholder="Seu Nome Completo" />
					</InputBox>
					<InputBox>
						<h3>Telefone</h3>
						<input type="text" placeholder="(00) 00000-0000"/>
					</InputBox>
					<InputBox>
						<h3>Email</h3>
						<input type="email" placeholder="seuemail@email.com" />
					</InputBox>
					<InputBox>
						<h3>Mensagem</h3>
						<textarea placeholder="Sua mensagem aqui."/>
					</InputBox>

					<SubmitFormButton type="submit">Enviar</SubmitFormButton>
				</ContentModal>
			</BoxModal>
		</Modal>
	)
}
