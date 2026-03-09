import React from 'react'
import { AboutHero, Accounts, Footer, Header, OurApproach, WhyChooseUsOne } from '../Componenets'

const About = () => {
  return (
    <>
    {/* header  */}
      <Header />
      {/* about hero  */}
      <AboutHero />
      {/* our approach  */}
      <OurApproach />
      {/* why choose us one  */}
      <WhyChooseUsOne/>
      {/* accounts  */}
      <Accounts/>
      {/* footer  */}
      <Footer/>
      {/* bottom fotter  */}
      
    </>
  )
}

export default About