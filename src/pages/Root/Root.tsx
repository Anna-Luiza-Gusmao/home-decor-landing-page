import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../components/ScrollTop"

export function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </>
    )
}