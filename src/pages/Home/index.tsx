import HomeImg1 from "../../assets/home/img1.jpg"
import HomeImg2 from "../../assets/home/img2.jpg"
import HomeImg3 from "../../assets/home/img3.jpg"

import { DescriptionContainer, HomeContainer, KnowMoreButton } from "./styles"
import Content from "./homeContent.json"

export function HomePage() {
    return (
        <HomeContainer>
            <img src={HomeImg1} alt="Casa Decorada 1" />
            <DescriptionContainer>
                <div>
                    <h2>{Content.homeContent.description[0].title}</h2>
                    <p>{Content.homeContent.description[0].description}</p>
                    <KnowMoreButton>Saiba mais</KnowMoreButton>
                </div>
                <img src={HomeImg2} alt="Casa Decorada 2" />
                <img src={HomeImg3} alt="Casa Decorada 3" />
                <div>
                    <h2>{Content.homeContent.description[1].title}</h2>
                    <p>{Content.homeContent.description[1].description}</p>
                    <KnowMoreButton>Saiba mais</KnowMoreButton>
                </div>
            </DescriptionContainer>
        </HomeContainer>
    )
}