import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from '../../assets'

const CrmBlogs = () => {
    const blogs = [
        {
            id: 1,
            image: Blog1,
            date: 'Jan 10, 2026',
            comments: 5,
            title: 'Optimizing Customer Journeys with AI-Driven CRM Solutions'
        },
        {
            id: 2,
            image: Blog2,
            date: 'Jan 22, 2026',
            comments: 14,
            title: 'The Future of Personalization in B2B Customer Management'
        },
        {
            id: 3,
            image: Blog3,
            date: 'Feb 03, 2026',
            comments: 7,
            title: 'Data-Driven Decision Making: Why Your CRM Needs Analytics'
        },
        {
            id: 4,
            image: Blog4,
            date: 'Feb 15, 2026',
            comments: 11,
            title: 'Building Long-Term Customer Loyalty in a Digital First World'
        },
        {
            id: 5,
            image: Blog5,
            date: 'Feb 21, 2026',
            comments: 19,
            title: 'How Automated CRM Workflows Can Save You Hundreds of Hours'
        },
        {
            id: 6,
            image: Blog1,
            date: 'Feb 28, 2026',
            comments: 4,
            title: 'Sales Forecasting: Predicting Revenue with Greater Accuracy'
        }
    ]

    return (
        <>
            <section className='custom-padding py-20 bg-white'>
                <div className='flex flex-col   justify-center items-center mb-10'>
                    <h2 className='text-3xl md:text-4xl text-center font-semibold text-gray-900 mb-4'>Our latest news blogs</h2>
                    <p className='text-priamry-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {blogs.map((blog) => (
                        <Link to="/blog" key={blog.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: blog.id * 0.1 }}
                                className='group bg-primary-black  overflow-hidden cursor-pointer rounded-t-2xl'
                            >
                                {/* Image Container */}
                                <div className='relative h-64 overflow-hidden '>
                                    <img
                                        src={blog.image}
                                        className='w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110'
                                        alt={blog.title}
                                    />
                                </div>

                                {/* Content Container */}
                                <div className='p-6 space-y-4 transition-colors duration-300 group-hover:bg-primary-red'>
                                    <div className='flex items-center justify-between text-white/80 text-sm font-medium'>
                                        <div className='flex items-center gap-2'>
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <span>Comments({blog.comments})</span>
                                        </div>
                                    </div>

                                    <h3 className='text-white text-xl font-bold leading-tight line-clamp-2 uppercase'>
                                        {blog.title}
                                    </h3>

                                    <div className='flex items-center justify-between pt-4'>
                                        <div className='flex items-center gap-2 text-white group'>
                                            <span className='font-bold border-b border-transparent group-hover:border-white transition-all'>Read More</span>
                                            <ArrowRight size={18} className='transition-transform group-hover:translate-x-1' />
                                        </div>
                                        <div className='bg-white/20 p-2 rounded-full text-white group-hover:bg-white group-hover:text-primary-red transition-all'>
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

        </>
    )
}

export default CrmBlogs