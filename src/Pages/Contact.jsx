import React from 'react'
import { Footer, Forms, Header } from '../Componenets'
import { ContactBg } from '../assets'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
        {/* contact header  */}
            <Header />
            {/* contact hero  */}
            <main className='custom-padding w-full flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover min-h-[60vh] relative' style={{ backgroundImage: `url(${ContactBg})` }}>
                <div className='flex flex-col justify-center items-center w-full space-y-8 z-10'>
                    <h2 className=' text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center capitalize'>Contact Us</h2>
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 capitalize'>
                       <Link to={'/about'}>
                        <button className='bg-primary-red border-2 border-primary-red text-white px-10 py-3  capitalize rounded-full transition-all duration-300  '>
                           learn more
                        </button>
                       </Link>
                    </div>
                </div>
            </main>
            {/* form componenet  */}
            <Forms/>
            {/* footer component  */}
            <Footer />
        </>
    )
}

export default Contact