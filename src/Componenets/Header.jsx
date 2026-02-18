import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Modal from './Modal';
import { Logo } from '../assets';

const Header = () => {
    // navbar of the website 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'HRMS', path: '/hrms' },
        {
            name: 'SERVICES',
            path: '/service',
            dropdown: [
                { name: 'Managed IT Services', path: '/service/managed-it' },
                { name: 'Call Center Services', path: '/service/call-center' },
                { name: 'BPO', path: '/service/bpo' },
            ]
        },
        { name: 'CRM', path: '/crm' },
        // { name: 'BLOG', path: '/blog' },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="custom-padding py-6 top-0 bg-white z-50"
        >
            <div className="flex items-center justify-between ">

                {/* Logo */}
                <Link to="/">
                   <img className=' w-55   custom-size-two:w-65' src={Logo} alt="" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden custom-size:flex items-center bg-primary-black rounded-lg p-2 px-4 custom-size-two:px-18  space-x-4  custom-size-two:space-x-8">
                    <ul className="flex items-center space-x-8 capitalize text-white h-12">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                className="relative h-full flex items-center group cursor-pointer"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-lg font-medium transition-colors duration-300 flex items-center gap-1 ${isActive ? 'text-primary-red' : 'text-white hover:text-primary-red'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {link.dropdown && (
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                            )}
                                            {/* Active Line Animation */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeUnderline"
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-red"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>

                                {/* Desktop Dropdown */}
                                <AnimatePresence>
                                    {link.dropdown && activeDropdown === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-[100%] left-0 pt-4 z-50"
                                        >
                                            <div className="bg-primary-black border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 w-72 flex flex-col space-y-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className="text-white hover:text-primary-red text-sm font-bold p-3 rounded-xl hover:bg-primary-red/10 transition-all duration-300"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-red text-white custom-size:px-6 xl:px-8 py-2 rounded-full capitalize text-lg font-medium"
                        >
                            CONTACT
                        </motion.button>
                    </Link>
                </div>

                {/* Desktop Demo Button */}
                <div className="hidden custom-size:block">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="bg-primary-red px-6 py-2 rounded-full text-white capitalize text-lg font-medium"
                    >
                        request  demo
                    </motion.button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="custom-size:hidden p-2 text-primary-black"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 z-40 custom-size:hidden"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] sm:w-[50%] bg-primary-black z-50 custom-size:hidden flex flex-col p-8 pt-24 overflow-y-auto"
                        >
                            <button
                                onClick={toggleMobileMenu}
                                className="absolute top-6 right-6 text-white"
                            >
                                <X size={32} />
                            </button>

                            <ul className="flex flex-col space-y-4 capitalize text-2xl font-semibold">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.dropdown ? (
                                            <div className="flex flex-col">
                                                <button
                                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                                    className="flex items-center justify-between w-full py-2 text-white hover:text-primary-red transition-colors"
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileDropdownOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden flex flex-col pl-4 space-y-2"
                                                        >
                                                            {link.dropdown.map(item => (
                                                                <NavLink
                                                                    key={item.name}
                                                                    to={item.path}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                    className="text-lg py-2 text-gray-400 hover:text-primary-red transition-colors"
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <NavLink
                                                to={link.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `block py-2 transition-colors duration-300 ${isActive ? 'text-primary-red' : 'text-white hover:text-primary-red'
                                                    }`
                                                }
                                            >
                                                {link.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 flex flex-col space-y-4 w-full">
                                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                    <button className="w-full bg-primary-red text-white py-4 rounded-xl text-xl font-semibold">
                                        Contact Us
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsModalOpen(true);
                                    }}
                                    className="w-full border-2 border-primary-red text-primary-red py-4 rounded-xl text-xl font-semibold"
                                >
                                    Request a Demo
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.nav>
    );
};

export default Header;


