import { CarouselBox, CoverBox, ServicesBox, ServicesContainer, ServicesDescription, ServicesIcons, ServicesItens } from "./styles"
import Cover from "../../assets/services/coverImg.jpeg"
import { Counter } from "./components/Counter"
import CarouselImg1 from "../../assets/services/carousel1.jpeg"
import CarouselImg2 from "../../assets/services/carousel2.jpeg"
import CarouselImg3 from "../../assets/services/carousel3.jpeg"
import CarouselImg4 from "../../assets/services/carousel4.jpeg"
import CarouselImg5 from "../../assets/services/carousel5.jpeg"
import CarouselImg6 from "../../assets/services/carousel6.jpeg"
import CarouselImg7 from "../../assets/services/carousel7.jpeg"
import CarouselImg8 from "../../assets/services/carousel8.jpeg"
import { Carousel } from "./components/Carousel"
import { Buildings, HouseLine, PaintBrushBroad } from "@phosphor-icons/react"

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ServicesDescription>
				</ServicesItens>
                <ServicesItens>
					<ServicesIcons>
						<HouseLine size={32} />
					</ServicesIcons>
					<ServicesDescription>
                        <h4>Consultoria</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </ServicesDescription>
				</ServicesItens>
			</ServicesBox>
		</ServicesContainer>
	)
}
