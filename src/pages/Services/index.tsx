import {
	CarouselBox,
	CoverBox,
	ExampleDescription,
	ExampleImage,
	ServicesBox,
	ServicesContainer,
	ServicesDescription,
	ServicesExampleBox,
	ServicesExamplesContainer,
	ServicesIcons,
	ServicesItens
} from "./styles"
import Cover from "../../assets/services/coverImg.jpeg"
import { Counter } from "./components/Counter"
import { Carousel } from "./components/Carousel"
import { Buildings, ChatCenteredText, HouseLine, PaintBrushBroad } from "@phosphor-icons/react"
import { ExploreButton } from "./components/ExploreButton"

import CarouselImg1 from "../../assets/services/carousel1.jpeg"
import CarouselImg2 from "../../assets/services/carousel2.jpeg"
import CarouselImg3 from "../../assets/services/carousel3.jpeg"
import CarouselImg4 from "../../assets/services/carousel4.jpeg"
import CarouselImg5 from "../../assets/services/carousel5.jpeg"
import CarouselImg6 from "../../assets/services/carousel6.jpeg"
import CarouselImg7 from "../../assets/services/carousel7.jpeg"
import CarouselImg8 from "../../assets/services/carousel8.jpeg"
import ProjectImg1 from "../../assets/home/img4.jpeg"
import { CustomersBox } from "./components/CustomersBox"

export function ServicesPage() {
	const carouselImages = [
		CarouselImg1,
		CarouselImg2,
		CarouselImg3,
		CarouselImg4,
		CarouselImg5,
		CarouselImg6,
		CarouselImg7,
		CarouselImg8
	]

	return (
		<ServicesContainer>
			<CoverBox>
				<img src={Cover} alt="Imagem da Parede Decorada" />
				<section>
					<div>
						<h2>Projetos</h2>
						<Counter amount={50} timer={50} />
					</div>
					<div>
						<h2>Consultorias</h2>
						<Counter amount={100} timer={20} />
					</div>
					<div>
						<h2>Clientes</h2>
						<Counter amount={20} timer={80} />
					</div>
				</section>
			</CoverBox>
			<CarouselBox>
				<div>
					<h3>Inovamos o ambiente da sua casa e do seu escritório!</h3>
					<span />
				</div>
				<Carousel images={carouselImages} />
			</CarouselBox>
			<ServicesBox>
				<ServicesItens>
					<ServicesIcons>
						<HouseLine size={32} />
					</ServicesIcons>
					<ServicesDescription>
						<h4>Decoração</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</ServicesDescription>
				</ServicesItens>
				<ServicesItens>
					<ServicesIcons>
						<PaintBrushBroad size={32} />
					</ServicesIcons>
					<ServicesDescription>
						<h4>Design de Interiores</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</ServicesDescription>
				</ServicesItens>
				<ServicesItens>
					<ServicesIcons>
						<Buildings size={32} />
					</ServicesIcons>
					<ServicesDescription>
						<h4>Ambientação empresarial</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit.
						</p>
					</ServicesDescription>
				</ServicesItens>
				<ServicesItens>
					<ServicesIcons>
						<ChatCenteredText size={32} />
					</ServicesIcons>
					<ServicesDescription>
						<h4>Consultoria</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</ServicesDescription>
				</ServicesItens>
			</ServicesBox>
			<ServicesExamplesContainer>
				<ServicesExampleBox>
					<ExampleDescription>
						<h2>Projeto Lorem Inpun</h2>
						<p>
							Praesent tristique magna sit amet purus. Non arcu risus quis varius quam quisque id diam
							vel. Quam elementum pulvinar etiam non quam. Nascetur ridiculus mus mauris vitae ultricies
							leo integer. Arcu bibendum at varius vel pharetra. Ullamcorper morbi tincidunt ornare massa
							eget egestas purus viverra. Purus viverra accumsan in nisl nisi scelerisque eu ultrices
							vitae. Vitae semper quis lectus nulla at volutpat diam.
						</p>
						<ExploreButton />
					</ExampleDescription>
					<ExampleImage $isMarginRight>
						<img src={ProjectImg1} alt="Projeto 1" />
					</ExampleImage>
				</ServicesExampleBox>
				<ServicesExampleBox>
					<ExampleImage $isMarginRight={false}>
						<img src={CarouselImg6} alt="Projeto 2" />
					</ExampleImage>
					<ExampleDescription>
						<h2>Projeto Lorem Inpun</h2>
						<p>
							Praesent tristique magna sit amet purus. Non arcu risus quis varius quam quisque id diam
							vel. Quam elementum pulvinar etiam non quam. Nascetur ridiculus mus mauris vitae ultricies
							leo integer. Arcu bibendum at varius vel pharetra. Ullamcorper morbi tincidunt ornare massa
							eget egestas purus viverra. Purus viverra accumsan in nisl nisi scelerisque eu ultrices
							vitae. Vitae semper quis lectus nulla at volutpat diam.
							<br />
							Praesent tristique magna sit amet purus. Non arcu risus quis varius quam quisque id diam
							vel. Quam elementum pulvinar etiam non quam. Nascetur ridiculus mus mauris vitae ultricies
							leo integer. Arcu bibendum at varius vel pharetra.
						</p>
						<ExploreButton />
					</ExampleDescription>
				</ServicesExampleBox>
			</ServicesExamplesContainer>
			<CustomersBox />
		</ServicesContainer>
	)
}
