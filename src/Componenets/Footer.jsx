import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send, MapPinHouse } from 'lucide-react';
import { Logo, clucth } from '../assets';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter an email address');
            return;
        }
        setLoading(true);
        const loadingToast = toast.loading('Subscribing...');

        try {
            const response = await axios.post('https://processiqtech.com/php/send_email_dynamic.php', email);

            if (response.data.status === 'success' || response.status === 200) {
                toast.success('Successfully subscribed to newsletter!', { id: loadingToast });
                setEmail('');
            } else {
                toast.error(response.data.message || 'Something went wrong. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            toast.error('Failed to subscribe. Please try again.', { id: loadingToast });
            console.error('Subscription error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <footer className="bg-[#E5E5E5] text-primary-black font-outfit">
                {/* Main Footer Content */}
                <div className="custom-padding py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 custom-size:grid-cols-3 gap-12 custom-size:gap-24">

                        {/* Column 1: Logo & Info */}
                        <div className="space-y-8">
                            <Link to="/">
                                <img className='w-72' src={Logo} alt="" />
                            </Link>
                            <p className="text-primary-gray font-medium leading-relaxed max-w-sm">
                                Empowering global enterprises with intelligent IT solutions, strategic BPO, and next-gen customer engagement platforms. We streamline complexity to drive sustainable business growth.
                            </p>
                            <div className='flex items-center gap-4 py-4'>
                                <a
                                    className='bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-red transition-all duration-300 shadow-sm group'
                                    href='https://www.facebook.com/processiqtech/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" className='fill-[#1877F2] group-hover:fill-white transition-colors duration-300'>
                                        <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                                    </svg>
                                </a>
                                <a
                                    className='bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-red transition-all duration-300 shadow-sm group'
                                    href='https://www.instagram.com/processiqtech/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" className='fill-[#E4405F] group-hover:fill-white transition-colors duration-300'>
                                        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                                    </svg>
                                </a>
                                <a
                                    className='bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-red transition-all duration-300 shadow-sm group'
                                    href="https://www.trustpilot.com/review/processiqtech.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" className='group-hover:brightness-0 group-hover:invert transition-all duration-300'>
                                        <path fill="#00b67a" d="M45.023,18.995H28.991L24.039,3.737l-4.968,15.259L3.039,18.98l12.984,9.44l-4.968,15.243 l12.984-9.424l12.968,9.424L32.055,28.42L45.023,18.995z"></path>
                                        <path fill="#005128" d="M33.169,31.871l-1.114-3.451l-8.016,5.819L33.169,31.871z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://clutch.co/profile/processiq-tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=' flex items-center justify-center transition-all duration-300'
                                >
                                    <img src={clucth} className=" w-40 h-20 object-contain transition-all duration-300" alt="Clutch" />
                                </a>
                            </div>

                        </div>

                        {/* Column 2: Support Links */}
                        <div className="space-y-8">
                            <h4 className="text-xl font-medium uppercase tracking-wider text-primary-red">Support</h4>
                            <ul className="space-y-4 text-primary-gray">
                                {[
                                    { name: 'HOME', path: '/' },
                                    { name: 'ABOUT', path: '/about' },
                                    { name: 'HRMS', path: '/hrms' },
                                    { name: 'SERVICES', path: '/service' },
                                    { name: 'CONTACT US', path: '/contact' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-lg font-medium hover:text-primary-red transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Get in Touch */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-medium uppercase tracking-wider mb-6 text-primary-red">Get In Touch</h4>
                                <p className="text-primary-gray font-medium mb-6">
                                    Subscribe to our newsletter for the latest tech insights and business optimization strategies.
                                </p>
                            </div>
                            {/* Subscription Form */}
                            <form onSubmit={handleSubmit} className="relative flex items-center max-w-sm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your E-Mail Address"
                                    required
                                    className="w-full bg-white px-6 py-4 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-red/20 placeholder:text-gray-400"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="absolute right-2 bg-primary-red text-white p-2 rounded-lg hover:bg-primary-black transition-all duration-300 disabled:opacity-50"
                                >
                                    <Send size={20} />
                                </button>
                            </form>

                            {/* Contact Info */}
                            <div className="space-y-4 pt-2">
                                {/* <div className="flex items-center gap-4 group">
                                <Phone size={20} className="group-hover:text-primary-red transition-colors text-primary-red" />
                                <span className="font-medium">+1 281-874-8480</span>
                            </div> */}
                                <div className="flex items-center gap-4 group">
                                    <Mail size={20} className="group-hover:text-primary-red transition-colors text-primary-red" />
                                    <span className="font-medium">Info@processiqtech.com</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <MapPinHouse size={20} className="group-hover:text-primary-red transition-colors text-primary-red" />
                                    <span className="font-medium">150 NW 72ND AVE TOWER 1 STE 455 #18787, MIAMI, FL 33126</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 py-8 custom-padding">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <p className="font-medium text-center md:text-left text-sm md:text-base">
                            Copyright © 2026 ProcessIQ Tech All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
// here is the footer component
// here is the bottom compoenent
