import { useEffect, useState } from 'react'
import { AppearingImage, ImageContainer } from './styles'

interface ScrollAppearImageProps {
    imageKey: string
    imageUrl: string
    alt: string
    porcentScreen: string
}

export const ScrollAppearImage: React.FC<ScrollAppearImageProps> = ({ imageKey, imageUrl, alt, porcentScreen }) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const imageContainer = document.getElementById(`image-container-${imageKey}`)

        if (imageContainer) {
            const containerTop = imageContainer.offsetTop
            const containerHeight = imageContainer.clientHeight

            if (scrollPosition > containerTop - containerHeight) {
                setIsVisible(true)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <ImageContainer id={`image-container-${imageKey}`}>
            <AppearingImage src={imageUrl} alt={alt} $isVisible={isVisible} $porcent={porcentScreen} loading="lazy"/>
        </ImageContainer>
    )
}