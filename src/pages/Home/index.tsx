import HomeImg1 from "../../assets/home/img1.jpeg"
import HomeImg2 from "../../assets/home/img2.jpeg"
import HomeImg3 from "../../assets/home/img3.jpeg"
import HomeImg4 from "../../assets/home/img4.jpeg"
import HomeImg5 from "../../assets/home/img5.jpeg"
import HomeImg6 from "../../assets/home/img6.jpeg"
import HomeImg7 from "../../assets/home/img7.jpeg"

import Profile1 from "../../assets/home/profile1.jpeg"
import Profile2 from "../../assets/home/profile2.jpeg"
import Profile3 from "../../assets/home/profile3.jpeg"

import { BoxImagesContainer, CustomerTestimonialsContainer, DescriptionContainer, HomeContainer, KnowMoreButton, TestimonialContent, TestimonialsBox } from "./styles"
import Content from "./homeContent.json"
import { ScrollAppearImage } from "./components/ScrollAppearImage"

export function HomePage() {
    const customerTestimonials = Content.homeContent.testimonials.map((item, index) => ({
        ...item,
        pathCostumerImage: index === 0 ? Profile1 : index === 1 ? Profile2 : Profile3,
    }))

    return (
        <HomeContainer>
            <img src={HomeImg1} alt="Casa Decorada 1" />
            <DescriptionContainer>
                <div>
                    <h2>{Content.homeContent.description[0].title}</h2>
                    <p>{Content.homeContent.description[0].description}</p>
                    <KnowMoreButton>Saiba mais</KnowMoreButton>
                </div>
                <ScrollAppearImage imageKey="1" imageUrl={HomeImg2} alt="Casa Decorada 2" porcentScreen="100%" />
                <ScrollAppearImage imageKey="2" imageUrl={HomeImg3} alt="Casa Decorada 3" porcentScreen="-100%" />
                <div>
                    <h2>{Content.homeContent.description[1].title}</h2>
                    <p>{Content.homeContent.description[1].description}</p>
                    <KnowMoreButton>Saiba mais</KnowMoreButton>
                </div>
            </DescriptionContainer>

            <CustomerTestimonialsContainer>
                <h3>Testemunhos dos nossos clientes</h3>
                <TestimonialsBox>
                    {
                        customerTestimonials.map((item) => (
                            <TestimonialContent key={item.id}>
                                <img src={item.pathCostumerImage} alt={`Imagem do cliente ${item.customerName}`} loading="lazy"/>
                                <p>{item.testimonial}</p>
                                <div>
                                    <p>{item.customerName}</p>
                                    <p>{item.customerCharge}</p>
                                </div>
                            </TestimonialContent>
                        ))
                    }
                </TestimonialsBox>
            </CustomerTestimonialsContainer>

            <BoxImagesContainer>
                <img src={HomeImg4} alt="Casa Decorada 4" />
                <img src={HomeImg5} alt="Casa Decorada 5" />
                <img src={HomeImg6} alt="Casa Decorada 6" />
                <img src={HomeImg7} alt="Casa Decorada 7" />
            </BoxImagesContainer>
        </HomeContainer>
    )
}