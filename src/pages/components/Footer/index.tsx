import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { FooterContainer, NavigableLinkBox, SocialMediaBox } from "./styles"
import { Link } from "react-router-dom"

export function Footer() {
	return (
		<FooterContainer>
			<div>
				<h2>homedecor</h2>
				<NavigableLinkBox>
					<Link to="/">Sobre</Link>
					<Link to="/">Serviços</Link>
					<Link to="/">Decorações</Link>
				</NavigableLinkBox>
			</div>
			<SocialMediaBox>
				<FacebookIcon />
				<InstagramIcon />
				<PinterestIcon />
				<WhatsAppIcon />
			</SocialMediaBox>
		</FooterContainer>
	)
}
