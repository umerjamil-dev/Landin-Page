import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, PhoneCall, BarChart3, Users, Clock, ShieldCheck, HeartHandshake, Zap, Globe } from 'lucide-react'
import { AutoMakeTask, CrmClient, CrmCore, CrmHeroOne, Footer, Header } from '../Componenets'

const CallCenter = () => {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <CrmHeroOne
                title={<>Next-Gen <span className="text-primary-red">Call Center</span> Solutions for Customer Success</>}
                description="Deliver exceptional customer experiences with our 24/7 multichannel support, advanced telephony, and data-driven engagement strategies."
                btn1Text="See Solutions"
                btn2Text="Free Consultation"
            />
               
            {/* Core Call Center Services Section */}
            <CrmCore
                title={(
                    <>
                        Complete Customer <br />
                        <span className="relative inline-block mt-2 font-bold">
                            Engagement Support
                        </span>
                    </>
                )}
                mainDescription="We provide the technology and human expertise to handle every customer interaction with precision, empathy, and professional excellence."
                features={[
                    {
                        id: 1,
                        title: "Inbound Support",
                        description: "Professional multi-lingual support handling queries, troubleshooting, and order processing around the clock.",
                        icon: <Headphones size={40} className="text-white" />
                    },
                    {
                        id: 2,
                        title: "Outbound Sales",
                        description: "Strategic lead generation, telemarketing, and follow-up campaigns designed to boost your conversion rates.",
                        icon: <PhoneCall size={40} className="text-white" />
                    },
                    {
                        id: 3,
                        title: "Analytics & Reporting",
                        description: "Deep insights into call metrics, customer sentiment, and agent performance via real-time dashboards.",
                        icon: <BarChart3 size={40} className="text-white" />
                    }
                ]}
            />

            {/* New Detailed Section 1: The Strategic Value */}
            <section className="py-20 bg-slate-50 custom-padding font-outfit">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Why Expert Call Center <br /> Operations Drive Growth
                        </h2>
                        <div className="w-20 h-1 bg-primary-red rounded-full"></div>
                        <p className="text-slate-700 text-lg leading-relaxed text-justify">
                            In today's fast-paced market, customer satisfaction is the ultimate differentiator. Our call center services go beyond answering phones; we become the voice of your brand. We use advanced CRM integrations to ensure every interaction is personalized and efficient.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed text-justify">
                            Partnering with ProcessIQ Tech allows you to scale your support instantly without the overhead of physical infrastructure, recruitment, or training. Our proactive approach ensures high First-Call Resolution (FCR) and improved Net Promoter Scores (NPS).
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: <Clock className="text-primary-red" />, title: "24/7 Availability" },
                            { icon: <Users className="text-primary-red" />, title: "Skilled Agents" },
                            { icon: <Zap className="text-primary-red" />, title: "Rapid Response" },
                            { icon: <Globe className="text-primary-red" />, title: "Global Support" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center border border-slate-100 hover:border-primary-red/20 transition-all">
                                {item.icon}
                                <span className="font-bold text-slate-800">{item.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Smart Automation Section */}
            <AutoMakeTask
                title="Smart Call Routing & AI-Powered Automation"
                description="We utilize intelligent Interactive Voice Response (IVR) and automated ticketing to reduce wait times and ensure every call reaches the right expert."
                points={[
                    "Skill-Based Smart Routing",
                    "Automated Post-Call Surveys",
                    "AI Sentiment Analysis"
                ]}
                btnText="Start Scaling Now"
            />

            {/* New Detailed Section 2: Our Methodology */}
            <section className="py-20 bg-white custom-padding font-outfit">
                <div className=" text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900"
                    >
                        Our Call Center Operational Workflow
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                        {
                            [
                                {
                                    step: "01",
                                    title: "Onboarding & Knowledge Transfer",
                                    desc: "We perform a thorough analysis of your product/service to build a comprehensive knowledge base. Our team works closely with you to understand your brand voice, operational standards, and key performance indicators (KPIs)."
                                },
                                {
                                    step: "02",
                                    title: "Deployment & Integration",
                                    desc: "After training the specialized agents, we integrate our telephony systems with your existing CRM. We set up robust workflows, quality control protocols, and feedback loops to ensure a seamless transition for your customers."
                                },
                                {
                                    step: "03",
                                    title: "Optimization & Monitoring",
                                    desc: "Our quality assurance team continuously monitors interactions to ensure excellence. Through real-time data analysis and regular performance reviews, we optimize scripts and workflows to maintain peak efficiency and customer satisfaction."
                                }
                            ].map((method, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
                                >
                                    <span className="text-5xl font-black text-primary-red/20">{method.step}</span>
                                    <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-semibold">{method.desc}</p>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            <CrmClient />

            <Footer />
        </>
    )
}

export default CallCenter