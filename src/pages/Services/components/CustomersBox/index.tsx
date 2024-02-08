import { Quotes, UserCirclePlus } from "@phosphor-icons/react"
import Profile1 from "../../../../assets/home/profile1.jpeg"
import Profile2 from "../../../../assets/home/profile2.jpeg"
import Profile3 from "../../../../assets/home/profile3.jpeg"
import { CustomerBox, CustomerTestimonialBox, CustomerTestimonialContainer, CustomersGrid } from "./styles"

export function CustomersBox() {
	return (
		<CustomerBox>
			<h3>Conheça nossos clientes</h3>
			<CustomersGrid>
				<UserCirclePlus size={96} />
				<UserCirclePlus size={96} />
				<UserCirclePlus size={96} />
				<UserCirclePlus size={96} />
				<UserCirclePlus size={96} />
				<UserCirclePlus size={96} />
			</CustomersGrid>
			<CustomerTestimonialContainer>
				<CustomerTestimonialBox>
					<Quotes size={36} />
					<p>
						"Praesent tristique magna sit amet purus. Non arcu risus quis varius quam quisque id diam vel.
						Quam elementum pulvinar etiam non quam. Nascetur ridiculus mus mauris vitae ultricies leo
						integer. Arcu bibendum at varius vel pharetra."
					</p>
					<span />
					<div>
						<img src={Profile1} alt="Foto do Cliente Fictício" />
						<div>
							<p>Emily Lopes</p>
							<p>Arquiteta - Company</p>
						</div>
					</div>
				</CustomerTestimonialBox>
				<CustomerTestimonialBox>
					<Quotes size={36} />
					<p>
						"Praesent tristique magna sit amet purus. Non arcu risus quis varius quam quisque id diam vel.
						Quam elementum pulvinar etiam non quam. Nascetur ridiculus mus mauris vitae ultricies leo
						integer. Arcu bibendum at varius vel pharetra."
					</p>
					<span />
					<div>
						<img src={Profile2} alt="Foto do Cliente Fictício" />
						<div>
							<p>Lília Ferreira</p>
							<p>Engenheira Civil - Company</p>
						</div>
					</div>
				</CustomerTestimonialBox>
				<CustomerTestimonialBox>
					<Quotes size={36} />
					<p>
						"Praesent tristique magna sit amet purus. Non arcu risus quis varius quam quisque id diam vel.
						Quam elementum pulvinar etiam non quam. Nascetur ridiculus mus mauris vitae ultricies leo
						integer. Arcu bibendum at varius vel pharetra."
					</p>
					<span />
					<div>
						<img src={Profile3} alt="Foto do Cliente Fictício" />
						<div>
							<p>Leandro Vieira</p>
							<p>Design de Interiores - Company</p>
						</div>
					</div>
				</CustomerTestimonialBox>
			</CustomerTestimonialContainer>
		</CustomerBox>
	)
}
