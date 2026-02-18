import React from 'react'
import { Link } from 'react-router-dom'
import { CrmToolsBg, item1, item2, item3, item4, item5, item6 } from '../../assets'


const CrmTools = () => {
    return (
        <>
            <section className='py-20 bg-white overflow-hidden custom-padding'>
                <div className=''>
                    {/* Headers */}
                    <div className='text-center  mx-auto '>
                        <h4 className='text-xl font-medium text-gray-900 mb-4'>Our Integrations</h4>
                        <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'>Connect Your Favorite Tools</h2>
                        <p className='text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto'>
                            Enhance Your CRM Experience By Integrating With The Apps You Already Use. From Email And Marketing Tools To Payment Systems, Everything Works Together Seamlessly.
                        </p>
                    </div>

                    {/* Desktop Integration Diagram */}
                    <div className='flex items-center justify-center gap-12 lg:gap-60 relative w-full max-w-7xl mx-auto'>

                        {/* Left Tree */}
                        <div className='hidden lg:flex flex-col items-end gap-12 w-1/3 relative'>
                            {/* Icons positioned absolutely or relatively? Flex column is easier for spacing */}
                            <div className='relative z-10 p-3 bg-white rounded-xl shadow-sm border border-gray-100'><img src={item1} alt="Tool" className='w-12 h-12 object-contain ' /></div>
                            <div className='relative z-10 p-3 bg-white rounded-xl shadow-sm border border-gray-100'><img src={item2} alt="Tool" className='w-12 h-12 object-contain ' /></div>
                            <div className='relative z-10 p-3 bg-white rounded-xl shadow-sm border border-gray-100'><img src={item3} alt="Tool" className='w-12 h-12 object-contain ' /></div>

                            {/* Connecting Lines SVG */}
                            <svg className='absolute top-0 right-[-500px] h-full w-[700px] -z-0 pointer-events-none' preserveAspectRatio="none">
                                {/* Top Path */}
                                <path d="M 160 25 H 200 Q 230 25 230 55 V 135 H 700" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="700" cy="135" r="4" fill="#D1D5DB" />
                                {/* Middle Path */}
                                <path d="M 160 145 H 700" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="700" cy="145" r="4" fill="#D1D5DB" />
                                {/* Bottom Path */}
                                <path d="M 160 265 H 200 Q 230 265 230 235 V 155 H 700" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="700" cy="155" r="4" fill="#D1D5DB" />
                            </svg>
                        </div>

                        {/* Center Button */}
                        <div className='relative z-20 shrink-0'>
                            <Link to="/contact">
                                <button className='bg-black text-white px-8 py-4 border border-primary-red border-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 '>
                                    See All Integrations
                                </button>
                            </Link>
                        </div>

                        {/* Right Tree */}
                        <div className='hidden lg:flex flex-col items-start gap-12 w-1/3 relative'>
                            <div className='relative z-10 p-3 bg-white rounded-xl shadow-sm border border-gray-100'><img src={item4} alt="Tool" className='w-12 h-12 object-contain ' /></div>
                            <div className='relative z-10 p-3 bg-white rounded-xl shadow-sm border border-gray-100'><img src={item5} alt="Tool" className='w-12 h-12 object-contain ' /></div>
                            <div className='relative z-10 p-3 bg-white rounded-xl shadow-sm border border-gray-100'><img src={item6} alt="Tool" className='w-12 h-12 object-contain ' /></div>

                            {/* Connecting Lines SVG */}
                            <svg className='absolute top-0 left-[-500px] h-full w-[700px] -z-0 pointer-events-none' style={{ transform: 'scaleX(-1)' }}>
                                {/* Mirrored paths from left side */}
                                <path d="M 160 25 H 200 Q 230 25 230 55 V 135 H 700" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="700" cy="135" r="4" fill="#D1D5DB" />
                                <path d="M 160 145 H 700" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="700" cy="145" r="4" fill="#D1D5DB" />
                                <path d="M 160 265 H 200 Q 230 265 230 235 V 155 H 700" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="700" cy="155" r="4" fill="#D1D5DB" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Integration Grid (fallback) */}
                    <div className='grid grid-cols-3 gap-6 mt-12 lg:hidden px-4'>
                        {[item1, item2, item3, item4, item5, item6].map((item, i) => (
                            <div key={i} className='flex justify-center'>
                                <div className='p-3 bg-white rounded-xl shadow-sm border border-gray-100'>
                                    <img src={item} alt="Tool" className='w-10 h-10 object-contain' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CrmTools