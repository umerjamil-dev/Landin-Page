import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Activity, Users, Shield, Zap } from 'lucide-react';

const CrmModule = () => {
    const [selectedModule, setSelectedModule] = useState(null);

    const crmModules = [
        {
            id: 1,
            name: 'E Book CRM',
            users: 124,
            status: 'Active',
            sections: [
                {
                    heading: "Streamlining Digital Publishing",
                    content: "The Admin E-Book CRM is engineered to transform how digital content is managed and distributed. It provides a comprehensive suite of tools designed specifically for the modern publishing industry, enabling publishers to handle thousands of titles with ease. From initial manuscript ingestion to final distribution across global platforms, every step is optimized for speed and accuracy."
                },
                {
                    heading: "Advanced Royalty Management",
                    content: "One of the most complex aspects of publishing is managing author royalties and contracts. Our system automates this entire process, calculating precise payments based on real-time sales data from various channels. Authors get access to their own transparent dashboards, reducing administrative overhead and building trust through clear, verifiable financial reporting."
                },
                {
                    heading: "Global Distribution Network",
                    content: "Integrate seamlessly with major ebook retailers and libraries worldwide. The platform handles format conversion, DRM application, and metadata synchronization automatically, ensuring your content looks perfect on every device and is discoverable by readers everywhere."
                }
            ]
        },
        {
            id: 2,
            name: 'Writer CRM',
            users: 89,
            status: 'Active',
            sections: [
                {
                    heading: "Empowering Content Creators",
                    content: "The Writer CRM provides an immersive, distraction-free environment for professional content creation. It goes beyond simple word processing by integrating research tools, character mapping, and plot development modules directly into the writing interface. It is the ultimate workspace for authors who demand both power and simplicity."
                },
                {
                    heading: "Collaborative Editorial Workflows",
                    content: "Writing is often a team effort. This module allows writers, editors, and proofreaders to collaborate in real-time. With advanced version control and comment tracking, you can manage the entire editorial process without ever leaving the platform. Track changes, set deadlines, and assign tasks to ensure every project stays on schedule."
                },
                {
                    heading: "Direct CMS Integration",
                    content: "Once a piece is ready for the world, publishing is just a click away. Connect directly to WordPress, Ghost, or custom headless CMS platforms. The system handles image optimization, SEO meta-tagging, and formatting adjustments automatically to match your site's style."
                }
            ]
        },
        {
            id: 3,
            name: 'Publication CRM',
            users: 56,
            status: 'Idle',
            sections: [
                {
                    heading: "Lifecycle Management",
                    content: "Manage the entire lifecycle of physical and digital publications. This module tracks everything from initial concept and design phases through to printing, marketing, and final archive. It serves as the single source of truth for all project-related data and communication."
                },
                {
                    heading: "Inventory and Logistics",
                    content: "For publishers dealing with physical media, our logistics engine provides real-time tracking of warehouse stock, shipping status, and retail distribution. Automated alerts for low stock levels and integrated purchase order generation ensure you never miss a sales opportunity."
                }
            ]
        },
        {
            id: 4,
            name: 'Auto Trade',
            users: 210,
            status: 'Active',
            sections: [
                {
                    heading: "High-Frequency Algorithm Support",
                    content: "The Auto Trade module is built on a high-concurrency architecture capable of processing millions of data points per second. It provides traders with the tools to build, test, and deploy automated trading strategies across multiple asset classes including stocks, forex, and commodities."
                },
                {
                    heading: "Real-Time Risk Monitoring",
                    content: "In the world of automated trading, risk management is paramount. Our system includes built-in circuit breakers, exposure limits, and real-time P&L tracking. The dashboard provides a heat map of all active positions, allowing for instant manual intervention if market conditions shift unexpectedly."
                }
            ]
        },
        {
            id: 5,
            name: 'Research Ebook',
            users: 34,
            status: 'Review',
            sections: [
                {
                    heading: "Deep Data Indexing",
                    content: "Turn static PDFs into dynamic, searchable knowledge bases. Our AI-driven indexing engine extracts text, tables, and images from e-books, making every piece of information instantly accessible through a powerful cross-reference search tool."
                },
                {
                    heading: "Academic Collaboration",
                    content: "Standardize your research process with shared bibliographies, collaborative annotation tools, and automated citation generators. Perfect for university departments and corporate R&D teams looking to build a collective intelligence hub."
                }
            ]
        },
        {
            id: 6,
            name: 'IT Trade',
            users: 145,
            status: 'Active',
            sections: [
                {
                    heading: "Enterprise IT Procurement",
                    content: "Simplify the complex world of IT asset management. This module tracks hardware lifecycles, software licenses, and cloud service subscriptions in one unified dashboard. Avoid costly double-purchasing and ensure all assets are being utilized at peak efficiency."
                },
                {
                    heading: "Vendor and SLA Tracking",
                    content: "Maintain high service standards with integrated vendor performance monitoring. Track support tickets against SLAs and manage contract renewals automatically with intelligent notification systems."
                }
            ]
        },
        // {
        //     id: 7,
        //     name: 'Admin QC CRM',
        //     users: 12,
        //     status: 'Active',
        //     sections: [
        //         {
        //             heading: "Quality Assurance Automation",
        //             content: "The QC CRM is the backbone of our service reliability. It automates the testing and verification of all incoming data and outgoing products. By reducing human error, it ensures that every deliverable meets the highest possible standards of quality."
        //         },
        //         {
        //             heading: "Error Detection and Reporting",
        //             content: "Instant alerts and detailed bug reports help your technical team resolve issues before they affect the end-user. The system tracks the 'mean time to resolution' (MTTR) and provides historical data to identify recurring problem areas in your workflows."
        //         }
        //     ]
        // },


        {
            id: 10,
            name: 'RSP CRM',
            users: 8,
            status: 'Idle',
            sections: [
                {
                    heading: "Resource Provider Networking",
                    content: "Manage your network of external contractors and service providers. This portal handles onboarding, secure document sharing, and automated invoicing, making it easy to scale your workforce up or down based on project demands."
                }
            ]
        },
        {
            id: 11,
            name: 'Design Sales CRM',
            users: 15,
            status: 'Active',
            sections: [
                {
                    heading: "Centralized Design & eCommerce Client Management",
                    content: "Manage all your design clients, Shopify store owners, and project workflows from one powerful platform. Design Sales CRM helps creative agencies and freelance design teams track leads, manage orders, monitor project progress, automate invoicing, and maintain seamless communication with clients — all in one place. From logo design and branding projects to full Shopify store development, this CRM ensures every inquiry, revision, and delivery is organized, allowing your team to close deals faster and scale design operations efficiently."
                },
                {
                    heading: "Key Benefits",
                    content: [
                        "Lead-to-project conversion tracking",
                        "Shopify store client management",
                        "Design order workflow & revision tracking",
                        "Automated invoicing and payment monitoring",
                        "Team task assignment and performance tracking",
                        "Centralized client communication history"
                    ]
                }
            ]
        },
        {
            id: 12,
            name: ' SPA & Salon CRM',
            users: 15,
            status: 'Active',
            sections: [
                {
                    heading: "Smart Appointment Scheduling for SPA & Salon",
                    content: "We offer an advanced appointment scheduling system specially designed for SPA & Salon businesses. Easily manage bookings, reschedule appointments, avoid double bookings, and keep your daily operations smooth with our smart calendar."
                },
                {
                    heading: "Online Booking Integration for SPA & Salon",
                    content: "We provide seamless online booking integration for your SPA & Salon website and social media platforms, allowing clients to book massages, treatments, facials, hair services, and more — anytime, anywhere."
                },
                {
                    heading: "Complete SPA & Salon Client Management",
                    content: "We offer detailed client profile management for your SPA & Salon, storing customer contact details, service history, treatment preferences, allergies, notes, and purchase records to deliver personalized experiences."
                },
                {
                    heading: "Automated SMS & Email Reminders for SPA & Salon",
                    content: "We provide automated reminders to reduce no-shows in your SPA & Salon. Appointment confirmations, reminders, follow-ups, birthday wishes, and promotional messages are sent automatically."
                }
            ]
        },
        {
            id: 13,
            name: 'Clinics CRM',
            users: 10,
            status: 'Active',
            sections: [
                {
                    heading: "Smart Appointment Scheduling for Clinics",
                    content: "We offer an advanced appointment scheduling system designed specifically for clinics. Easily manage patient bookings, reschedule visits, prevent double bookings, and organize doctor availability with a smart calendar system."
                },
                {
                    heading: "Online Appointment Booking for Clinics",
                    content: "We provide seamless online booking integration for your clinic website and social media platforms, allowing patients to schedule consultations anytime, anywhere."
                },
                {
                    heading: "Complete Patient Management System",
                    content: "We offer detailed patient profile management where you can securely store patient contact information, medical history, visit records, prescriptions, test reports, and treatment notes for better care and follow-up."
                }
            ]
        },
        {
            id: 14,
            name: 'Real Estate CRM',
            users: 25,
            status: 'Active',
            sections: [
                {
                    heading: "Smart Lead & Inquiry Management",
                    content: "We offer an advanced lead management system designed for real estate businesses. Capture inquiries from websites, portals, social media, and ads — and manage them efficiently from one dashboard."
                },
                {
                    heading: "Automated Lead Assignment",
                    content: "We provide smart lead distribution that automatically assigns property inquiries to agents based on availability, location, or project type, ensuring faster response times."
                },
                {
                    heading: "Property Listing Management",
                    content: "We offer complete property management where you can upload, organize, and manage residential, commercial, rental, and off-plan properties with images, pricing, and availability details."
                },
                {
                    heading: "Client & Buyer Profile Management",
                    content: "We provide detailed client profiles where you can store buyer preferences, budget range, communication history, site visit records, and deal progress for personalized follow-ups."
                },
                {
                    heading: "Automated Follow-ups & Reminders",
                    content: "We offer automated SMS, email, and WhatsApp reminders to ensure no lead is forgotten. Schedule follow-ups, meeting reminders, and property visit confirmations easily."
                }
            ]
        },
        {
            id: 15,
            name: 'Pharma Companies CRM',
            users: 18,
            status: 'Active',
            sections: [
                {
                    heading: "Smart Sales & Lead Management",
                    content: "We offer an advanced sales and lead management system designed specifically for pharmaceutical companies. Track hospital, clinic, and distributor inquiries while managing your sales pipeline efficiently."
                },
                {
                    heading: "Medical Representative (MR) Management",
                    content: "We provide complete management for medical representatives, including daily visit tracking, doctor coverage reports, route planning, and performance monitoring."
                }
            ]
        },

    ];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const ModalIcon = ({ children, color }) => (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} mb-3`}>
            {children}
        </div>
    );

    return (
        <section className="bg-gray-100 py-20 px-4 md:px-8 lg:px-16 font-outfit overflow-hidden rounded-xl">
            <div className=" mx-auto">
                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.h1
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-3xl md:text-5xl font-semibold text-slate-800 mb-3"
                        >
                            CRM Modules Dashboard
                        </motion.h1>
                        <motion.nav
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center text-sm font-bold tracking-wide"
                        >
                            <Link to="/" className="text-primary-red transition-all cursor-pointer">Dashboard</Link>
                            <span className="mx-3 text-gray-300">/</span>
                            <span className="text-gray-400">Applications</span>
                            <span className="mx-3 text-gray-300">/</span>
                            <span className="text-gray-500">CRM Systems</span>
                        </motion.nav>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/10"></span>
                        <span className="text-sm font-bold text-slate-600">All Systems Operational</span>
                    </motion.div>
                </div>

                {/* Grid Section - Updated to 4 columns to match image */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom-size-two:grid-cols-3 xl:grid-cols-3 gap-10"
                >
                    {crmModules.map((module) => (
                        <motion.div
                            key={module.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.05)",
                                transition: { duration: 0.3 }
                            }}
                            onClick={() => setSelectedModule(module)}
                            className="group relative bg-white p-5 md:p-6 rounded-2xl border border-gray-100 custom-size-two:min-w-sm flex items-center space-x-4 cursor-pointer overflow-hidden transition-all duration-300 active:scale-95"
                        >
                            {/* Ghost watermark icon on the right */}
                            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                                <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" strokeDasharray="80 30" />
                                    <path d="M14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="20" cy="20" r="4" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Left Icon */}
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="#ef4444" strokeWidth="3" strokeDasharray="80 30" />
                                    <path d="M14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                                    <circle cx="20" cy="20" r="5" fill="#ef4444" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-primary-red font-bold text-[10px] uppercase tracking-wider mb-0.5">CRM</h3>
                                <p className="text-slate-600 font-bold text-sm leading-snug group-hover:text-primary-red transition-colors duration-300">
                                    {module.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* DETAIL MODAL - Updated for extensive text */}
            <AnimatePresence>
                {selectedModule && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedModule(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            className="relative w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Modal Header - Fixed */}
                            <div className="relative p-8 md:p-12 pb-8 flex items-start justify-between bg-white z-10 border-b border-slate-50">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-50 rounded-3xl flex items-center justify-center shadow-inner">
                                        <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-16 md:h-16">
                                            <circle cx="20" cy="20" r="18" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="80 30" />
                                            <path d="M14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                                            <circle cx="20" cy="20" r="4" fill="#ef4444" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-primary-red/10 text-primary-red px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                Module Details
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${selectedModule.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                                {selectedModule.status}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-4xl font-black text-slate-800">{selectedModule.name}</h2>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedModule(null)}
                                    className="p-3 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-primary-red rounded-full transition-all duration-300"
                                >
                                    <X size={24} strokeWidth={2.5} />
                                </button>
                            </div>

                            {/* Modal Body - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-10 scrollbar-hide">
                                <div className="space-y-12">
                                    {selectedModule.sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * idx }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-4">
                                                <span className="w-8 h-[2px] bg-primary-red rounded-full"></span>
                                                {section.heading}
                                            </h3>
                                            {Array.isArray(section.content) ? (
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                                    {section.content.map((point, pIdx) => (
                                                        <motion.li
                                                            key={pIdx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: (idx * 0.1) + (pIdx * 0.05) }}
                                                            className="flex items-start gap-4 text-slate-600 text-lg font-semibold"
                                                        >
                                                            <div className="mt-2 w-2.5 h-2.5 rounded-full bg-primary-red flex-shrink-0 shadow-sm shadow-primary-red/30" />
                                                            {point}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed text-justify">
                                                    {section.content}
                                                </p>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Extra space for scroll */}
                                <div className="h-10" />
                            </div>

                            {/* Modal Footer - Fixed */}
                            <div className="p-8 md:p-12 pt-6 bg-white border-t border-slate-50">
                                <Link to="/contact">
                                    <button className="w-full bg-primary-red hover:bg-slate-900 text-white py-5 rounded-2xl text-lg font-bold transition-all duration-300 shadow-xl shadow-primary-red/20 flex items-center justify-center gap-3 group">
                                        Launch Full System Interface
                                        <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CrmModule;