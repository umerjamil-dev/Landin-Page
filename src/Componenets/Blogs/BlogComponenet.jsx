import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from '../../assets'

const BlogComponenet = () => {
    const blogs = [
        {
            id: 1,
            image: Blog1,
            date: 'Jan 15, 2026',
            comments: 12,
            title: 'How AI is Revolutionizing Modern Business Workflows'
        },
        {
            id: 2,
            image: Blog2,
            date: 'Jan 28, 2026',
            comments: 8,
            title: 'The Strategic Benefits of Multi-Channel Call Center Support'
        },
        {
            id: 3,
            image: Blog3,
            date: 'Feb 05, 2026',
            comments: 15,
            title: 'Maximizing ROI through Intelligent BPO Outsourcing'
        },
        {
            id: 4,
            image: Blog4,
            date: 'Feb 12, 2026',
            comments: 5,
            title: 'Cybersecurity Trends to Watch in the Global IT Landscape'
        },
        {
            id: 5,
            image: Blog5,
            date: 'Feb 20, 2026',
            comments: 20,
            title: 'Why Cloud-Native HRMS is Essential for Scalable Growth'
        },
        {
            id: 6,
            image: Blog1,
            date: 'Feb 25, 2026',
            comments: 9,
            title: 'Integrating Data Analytics into Your Customer Engagement Strategy'
        }
    ]

    return (
        <section className='custom-padding py-20 bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {blogs.map((blog) => (
                    <Link to="/contact" key={blog.id}>
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

                                <h3 className='text-white text-xl font-medium leading-tight line-clamp-2 uppercase'>
                                    {blog.title}
                                </h3>

                                <div className='flex items-center justify-between pt-4'>
                                    <div className='flex items-center gap-2 text-white group'>
                                        <span className='font-medium border-b border-transparent group-hover:border-white transition-all'>Read More</span>
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
    )
}

export default BlogComponenet