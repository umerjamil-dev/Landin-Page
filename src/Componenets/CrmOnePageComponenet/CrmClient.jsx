import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CrmClient = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Wizard Bano',
            role: 'Creative Director',
            content: "The Design Sales CRM has completely transformed how we handle our Shopify clients. Tracking revisions and automated invoicing has saved us hours of manual work every week.",
            avatar: 'https://i.pravatar.cc/150?u=1'
        },
        {
            id: 2,
            name: 'John Doe',
            role: 'Marketing Lead',
            content: "ProcessIQ Tech's unified ecosystem allowed our marketing team to track leads from initial inquiry to final project delivery with zero data loss. It's a game-changer for our ROI.",
            avatar: 'https://i.pravatar.cc/150?u=2'
        },
        {
            id: 3,
            name: 'Jane Smith',
            role: 'Product Manager',
            content: "The central dashboard provides a level of transparency we never had before. Managing multiple high-ticket projects simultaneously is now manageable and highly organized.",
            avatar: 'https://i.pravatar.cc/150?u=3'
        },
        {
            id: 4,
            name: 'Alex Johnson',
            role: 'Operations Head',
            content: "Implementing the E-Book CRM was seamless. The automation of royalty calculations and distribution networks has significantly accelerated our publishing timeline.",
            avatar: 'https://i.pravatar.cc/150?u=4'
        },
        {
            id: 5,
            name: 'Sarah Wilson',
            role: 'HR Manager',
            content: "Transitioning our internal processes to the Smart HRM portal improved team efficiency. The self-service features and automated reporting are incredibly intuitive.",
            avatar: 'https://i.pravatar.cc/150?u=5'
        }
    ];

    return (
        <>
            <section className="py-20 bg-white custom-padding mt-18 overflow-hidden font-outfit">
                <div className="flex flex-col mb-16 items-center justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-primary-black uppercase tracking-tight text-center max-w-2xl leading-tight"
                    >
                        Customer Reviews and Success Stories
                    </motion.h2>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-custom-bullet',
                            bulletActiveClass: 'swiper-custom-bullet-active',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-20"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="py-4">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl h-full"
                                >
                                    {/* Header: Avatar + Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-red rounded-full flex items-center justify-center border-2 border-white">
                                                <span className="text-white text-[10px] font-bold">"</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-xl md:text-2xl font-bold text-primary-black leading-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-slate-500 font-medium text-sm">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content: Testimonial Text */}
                                    <p className="text-slate-700 font-medium leading-relaxed text-lg">
                                        {item.content}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <style dangerouslySetInnerHTML={{
                        __html: `
                    .swiper-pagination {
                        position: relative !important;
                        bottom: 0 !important;
                        margin-top: 2rem;
                    }
                    .swiper-custom-bullet {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: #e5e7eb;
                        border-radius: 99px;
                        margin: 0 6px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .swiper-custom-bullet-active {
                        width: 32px;
                        background: #ED1C24;
                    }
                `}} />
                </div>
            </section >
        </>
    );
};

export default CrmClient;
