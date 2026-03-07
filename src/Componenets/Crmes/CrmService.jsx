import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Users, Briefcase, Clock, ShieldCheck, FileText, BarChart3 } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CrmService = () => {
    const modules =
        [
            {
                id: 1,
                title: 'Employee',
                desc: 'Manage employee records and workforce operations ',
                icon: <Users size={32} />
            },
            {
                id: 2,
                title: 'Recruitment',
                desc: 'Manage hiring process and talent acquisition tasks  ',
                icon: <Briefcase size={32} />
            },
            {
                id: 3,
                title: 'Attendance',
                desc: 'Manage employee time tracking and attendance records ',
                icon: <Clock size={32} />
            },
            {
                id: 4,
                title: 'Payroll',
                desc: 'Manage salaries, taxes, deductions and payment processing ',
                icon: <BarChart3 size={32} />
            },
            {
                id: 5,
                title: 'Performance',
                desc: 'Manage employee KPIs and performance review processes ',
                icon: <ShieldCheck size={32} />
            },
            {
                id: 6,
                title: 'Documents',
                desc: 'Manage document storage with secure access and control ',
                icon: <FileText size={32} />
            }
        ];

    return (
        <section className="py-20 bg-white custom-padding mt-18 overflow-hidden">
            <div className="flex flex-col mb-12">
                <h3 className='text-center text-xl font-medium text-primary-black uppercase mb-10 '>our services</h3>
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-medium text-primary-black uppercase text-center"
                >
                    CRM Solutions for Every Business
                </motion.h2>


            </div>
            <div className="relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-custom-bullet',
                        bulletActiveClass: 'swiper-custom-bullet-active',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-16"
                >
                    {modules.map((module) => (
                        <SwiperSlide key={module.id} className="py-4">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white hover:border p-6 rounded-2xl min-h-30  flex flex-col items-start gap-4 transition-all hover:shadow-2xl hover:border-primary-red hover:border-4 "
                            >
                                <div className='flex items-center gap-3'>
                                    <div className="p-4 bg-primary-gray text-white rounded-full transition-colors duration-300 hover:bg-primary-red">
                                        {module.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl  font-medium text-primary-black">{module.title}</h3>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-gray font-medium leading-relaxed">
                                        {module.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom styling for pagination bullets with flanking lines */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .swiper-pagination {
                        position: relative !important;
                        bottom: 0 !important;
                        margin-top: 3rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100% !important;
                    }
                    /* Creating the lines on left and right */
                    .swiper-pagination::before,
                    .swiper-pagination::after {
                        content: "";
                        background-color: #D1D5DB; /* Light gray line */
                        height: 2px;
                        width: 60px;
                        margin: 0 16px;
                    }
                    /* Extend lines on larger screens */
                    @media (min-width: 768px) {
                        .swiper-pagination::before,
                        .swiper-pagination::after {
                            width: 150px;
                        }
                    }

                    .swiper-custom-bullet {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: #E5E7EB; /* Light gray inactive dot */
                        border-radius: 50%;
                        margin: 0 6px !important;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .swiper-custom-bullet-active {
                        background: #6B7280; /* Darker gray active dot */
                        transform: scale(1.1);
                    }
                `}} />
            </div>
        </section>
    );
};

export default CrmService;
