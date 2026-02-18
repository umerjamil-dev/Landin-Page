import React from 'react'
// IMPORT COMPONENETENST HERE  sorry for capatilize typing
import { Header, Hero, SliderOne, TopModules, WhyChooseUs, Accounts, OprationOne, FAQS, CtaOne, Footer } from '../Componenets'

const Home = () => {
    const data = [
        {
        
        }
    ]
    return (
        
        <>
            {/* header */}
            <Header />
            {/* hero */}
            <Hero />
            {/* slider one */}
            <SliderOne />
            {/* top modules */}
            <TopModules />
            {/* why choose us */}
            <WhyChooseUs />
            {/* accounts */}
            <Accounts />
            {/* operations */}
            <OprationOne />
            {/* faqs */}
            <FAQS />
            {/* cta */}
            <CtaOne />
            {/* footer */}
            <Footer />
        </>
    )
}

export default Home