import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../components/ScrollTop"
import { useState } from "react"
import { ContactMeModal } from "../components/ContactMeModal"

export function Root() {
    const [openContactMeModal, setOpenContactMeModal] = useState(false)
    
    return (
        <>
            <Navbar setOpenContactMeModal={setOpenContactMeModal} />
            <ContactMeModal openContactMeModal={openContactMeModal} setOpenContactMeModal={setOpenContactMeModal}/>

            <Outlet />
            <ScrollToTop />
            <Footer />
        </>
    )
}