import React from 'react'
import { BlogComponenet, BlogsHero, Footer, Header } from '../Componenets'
import { Blog1, Line1 } from '../assets'
import { ArrowUpRight } from 'lucide-react'

const Blog = () => {
  return (
    <>
      {/* header  */}
      <Header />
      {/* blog hero  */}
      <BlogsHero />
      {/* blog  */}
      <section className='custom-padding relative pb-6'>
        <img src={Line1} className='absolute top-0 left-0 hidden sm:block' alt="" />
        <div className='w-full flex flex-col items-start justify-center rounded-2xl bg-cover bg-center bg-no-repeat space-y-6 md:space-y-10 py-12  px-6 md:px-12 min-h-[50vh]' style={{ backgroundImage: `url(${Blog1})` }}>
          <h1 className='text-white text-4xl md:text-6xl font-medium'>Blogs</h1>
          <p className='text-white text-xl md:text-3xl font-medium'>Join 50,000+ subscribers</p>
          <div className='bg-[#212121]/90 backdrop-blur-sm rounded-2xl sm:rounded-full w-full max-w-xl flex flex-col sm:flex-row items-center justify-between p-2 sm:p-0 sm:pl-6 border border-white/10'>
            <input
              type="email"
              placeholder='Enter your email'
              className='w-full bg-transparent placeholder:text-gray-400 text-white outline-none border-none py-3 sm:py-0'
            />
            <button className='bg-primary-red text-white flex items-center justify-center gap-2 px-8 h-12 sm:h-14 w-full sm:w-auto rounded-xl sm:rounded-r-full sm:rounded-l-none font-medium transition-all hover:bg-white hover:text-primary-red whitespace-nowrap'>
              Subscribe <ArrowUpRight size={20} />
            </button>
            <button className='capitalize'>Click The Button FOR mORE uPDATES</button>
          </div>
        </div>
      </section>
      {/* blog componenet  */}
      <BlogComponenet />
      {/* footer  */}
      <Footer />
    </>
  )
}

export default Blog