import React, { useState, useEffect } from "react"
import { ScrollToTopButton } from "./styles"
import { ArrowUp } from "@phosphor-icons/react"

export const ScrollToTop: React.FC = () => {
	const [visibleScroll, setVisibleScroll] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setVisibleScroll(true)
			} else {
				setVisibleScroll(false)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<ScrollToTopButton $isVisible={visibleScroll} onClick={scrollToTop}>
			<ArrowUp size={24} />
		</ScrollToTopButton>
	)
}
