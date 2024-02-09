import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globalStyles"
import { RouterProvider } from "react-router-dom"
import { allRouters } from "./routers/routers"
import { HelmetProvider } from "react-helmet-async"

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider theme={defaultTheme}>
				<RouterProvider router={allRouters} />

				<GlobalStyle />
			</ThemeProvider>
		</HelmetProvider>
	)
}
