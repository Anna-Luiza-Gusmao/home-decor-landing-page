import { CoverBox, ServicesContainer } from "./styles"
import Cover from "../../assets/services/coverImg.jpg"
import { Counter } from "./components/Counter"

export function ServicesPage() {
    return (
        <ServicesContainer>
            <CoverBox>
                <img src={Cover} alt="Imagem da Parede Decorada"/>
                <section>
                    <div>
                        <h2>Projetos</h2>
                        <Counter amount={50} timer={50}/>
                    </div>
                    <div>
                        <h2>Consultorias</h2>
                        <Counter amount={100} timer={20}/>
                    </div>
                    <div>
                        <h2>Clientes</h2>
                        <Counter amount={20} timer={80}/>
                    </div>
                </section>
            </CoverBox>
            
        </ServicesContainer>
    )
}