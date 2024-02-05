import React, { useEffect, useState } from "react"

interface ICounterProps {
	amount: number
	timer: number
}

export const Counter: React.FC<ICounterProps> = ({amount, timer}) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const counterContainer = document.getElementById("counterContainer")
			if (counterContainer && isInViewport(counterContainer)) {
				startCounter()
				window.removeEventListener("scroll", handleScroll)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const isInViewport = (element: HTMLElement) => {
		const rect = element.getBoundingClientRect()
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight / 2) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth / 2)
		)
	}

	const startCounter = () => {
		let initCount = 0
		const updateCounter = () => {		
			if (initCount < amount) {
				initCount += 1
				setTimeout(updateCounter, timer)
			}

			setCount(initCount)
		}

		updateCounter()
	}

	return <p id="counterContainer">+{count}</p>
}
