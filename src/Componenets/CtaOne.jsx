import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CtaOne = () => {
    // here's the cta one section 
    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const loadingToast = toast.loading('Sending your request...');

        try {
            const response = await axios.post('https://processiqtech.com/php/send_email_dynamic.php', formData);

            if (response.data.status === 'success' || response.status === 200) {
                toast.success('Request sent successfully!', { id: loadingToast });
                setFormData({ fullName: '', email: '' });
            } else {
                toast.error(response.data.message || 'Something went wrong', { id: loadingToast });
            }
        } catch (error) {
            toast.error('Failed to send request. Please try again.', { id: loadingToast });
            console.error('Submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="custom-padding py-24 overflow-hidden font-outfit">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='bg-primary-red rounded-2xl p-8 md:p-16 grid grid-cols-1 custom-size-two:grid-cols-2 items-center gap-12 shadow-2xl shadow-primary-red/30 relative'
            >
                {/* Decorative circle */}
                <div className='absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl'></div>

                {/* Left Content */}
                <div className="text-white space-y-6 z-10">
                    <div className='bg-white/10 px-4 py-2 rounded-full w-fit text-xs font-medium tracking-widest uppercase'>
                        Join the Revolution
                    </div>
                    <h2 className="text-4xl md:text-5xl   font-medium leading-tight">
                        Ready to accelerate <br /> your business growth?
                    </h2>
                    <p className="text-white/90 font-medium text-lg max-w-xl leading-relaxed">
                        Partner with ProcessIQ Tech and leverage our enterprise-grade infrastructure to scale your operations beyond boundaries.
                    </p>
                </div>

                {/* Right Form */}
                <div className="w-full space-y-8 bg-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md border border-white/10 z-10">
                    <div className="space-y-4">
                        <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight">
                            Get a Free Strategic Consultation
                        </h3>
                        <p className='text-white/70 text-sm font-medium'>Our experts will analyze your workflow and propose a customized technology roadmap.</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full bg-white text-primary-black px-8 py-5 rounded-3xl font-medium focus:outline-none focus:ring-4 focus:ring-white/20 transition-all placeholder:text-gray-400 border-none"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Business Email"
                                required
                                className="w-full bg-white text-primary-black px-8 py-5 rounded-3xl font-medium focus:outline-none focus:ring-4 focus:ring-white/20 transition-all placeholder:text-gray-400 border-none"
                            />
                        </div>
                        <motion.button
                            disabled={loading}
                            whileHover={{ scale: 1.02, backgroundColor: '#000' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-primary-black text-white font-black text-xl py-5 rounded-3xl shadow-2xl transition-all tracking-wider uppercase disabled:opacity-50"
                        >
                            {loading ? 'Processing...' : 'Request Access Now'}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default CtaOne;
