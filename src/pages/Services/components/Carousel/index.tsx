import { useState } from "react"
import { CarouselButton, CarouselContainer, CarouselImage } from "./styles"

interface ICarouselProps {
	images: Array<string>
}

export const Carousel: React.FC<ICarouselProps> = ({ images }) => {
	const [startIndex, setStartIndex] = useState(0)

	const nextSlide = () => {
		setStartIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	const prevSlide = () => {
		setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
	}

	return (
		<CarouselContainer>
			<CarouselButton onClick={prevSlide} $isLeft>
				&lt;
			</CarouselButton>
			{[0, 1, 2, 3].map((index) => (
				<CarouselImage
					key={index}
					src={images[(startIndex + index) % images.length]}
					alt={`Slide ${(startIndex + index) % images.length}`}
				/>
			))}
			<CarouselButton onClick={nextSlide} $isLeft={false}>
				&gt;
			</CarouselButton>
		</CarouselContainer>
	)
}
