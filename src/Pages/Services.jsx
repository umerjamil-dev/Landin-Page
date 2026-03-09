import React from 'react'
import { Header, HeroServices, SliderOne, ServicesGrid, CtaTwo, Footer } from '../Componenets'
import NewSection from '../Componenets/Home/NewSection'

const Services = () => {
  return (
    <>
      <Header />
      {/* header end */}
      <HeroServices />
      {/* HeroServices end */}
      <SliderOne />
      {/* SliderOne end */}
      <ServicesGrid />
      {/* ServicesGrid end */}
       <NewSection />
      <CtaTwo />
      {/* CtaTwo end */}
      <Footer />
      {/* Footer end */}
    </>
  )
}

export default Services