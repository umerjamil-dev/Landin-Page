import React, { useState } from 'react'
import { Contact1, Line1, Line2 } from '../assets'
import { Mail, Phone, Clock, ClockAlert } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { countries } from '../utils/countries'
// contact form of the website 
const Forms = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        countryCode: '+1',
        phone: '',
        email: '',
        serviceType: '',
        message: '',
    }) ;

    const [error,setError] = useState('lll')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const loadingToast = toast.loading('Sending your message...')

        try {
            const response = await axios.post('https://processiqtech.com/php/send_email_dynamic.php', formData)

            if (response.data.status === 'success' || response.status === 200) {
                toast.success('Message sent successfully!', { id: loadingToast })
                setFormData({
                    firstName: '',
                    lastName: '',
                    countryCode: '+92',
                    phone: '',
                    email: '',
                    serviceType: '',
                    message: '',

                })
            } else {
                toast.error(response.data.message || 'Something went wrong', { id: loadingToast })
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again.', { id: loadingToast })
            console.error('Submission error:', error)
        } finally {
            setLoading(false)
        }
    }

    const contactInfo = [
        {
            id: 1,
            icon: <Mail className="w-6 h-6" />,
            title: "Our Email",
            subtitle: "info@processiqtech.com",

        },
        {
            id: 2,
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            subtitle: "+1 281-874-8480"
        },
        {
            id: 3,
            icon: <Clock className="w-6 h-6" />,
            title: "Office Hours",
            subtitle: "Mon-Sat: 9 AM - 6 PM"
        }
    ]
console.log(error);

    return (
        <section className="custom-padding py-16 bg-white relative font-outfit">
            <img src={Line1} alt="" className='absolute top-0 left-0' />
            <img src={Line2} alt="" className='absolute bottom-0 right-0' />
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-black">Let's Discuss Your Business Needs</h2>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 ">
                {contactInfo.map((info) => (
                    <div
                        key={info.id}
                        className={`flex z-10 items-center gap-4 p-6 rounded-2xl transition-all duration-300 cursor-pointer
                        bg-gray-100 text-primary-black hover:bg-primary-red z-10 hover:text-white group hover:scale-105 hover:shadow-xl
                    `}
                    >
                        <div className={`p-3 rounded-full flex items-center justify-center w-12 h-12 bg-white text-primary-red`}>
                            {info.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">{info.title}</h3>
                            <p className={`text-sm font-medium text-gray-500 group-hover:text-white/90`}>{info.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div className="w-full h-full overflow-hidden flex justify-center md:justify-end">
                    <img src={Contact1} alt="Team meeting" className="w-[80%] object-cover transform hover:scale-105 transition-transform duration-700 rounded-xl shadow-2xl" />
                </div>

                {/* Form */}
                <div className="bg-gray-100 p-6 md:p-10 rounded-3xl z-10 shadow-lg">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary-black">Get In Touch Now</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                                className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black border border-transparent focus:border-primary-red/30"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                                className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black border border-transparent focus:border-primary-red/30"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="w-full sm:w-[120px] bg-white px-2 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all text-primary-black border border-transparent focus:border-primary-red/30"
                                >
                                    {countries.map((country) => (
                                        <option key={`${country.code}-${country.dial_code}`} value={country.dial_code}>
                                            {country.code} ({country.dial_code})
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="flex-1 bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black border border-transparent focus:border-primary-red/30"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black border border-transparent focus:border-primary-red/30"
                            />
                        </div>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all text-gray-400 border border-transparent focus:border-primary-red/30"
                        >
                            <option value="">Select Service Type</option>
                            <option value="managed-it">Managed IT Services</option>
                            <option value="bpo">BPO Solutions</option>
                            <option value="call-center">Call Center Services</option>
                            <option value="hrms">HRMS Solutions</option>
                            <option value="crm">CRM Integration</option>
                        </select>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="w-full bg-white px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-red/20 transition-all placeholder:text-gray-400 text-primary-black resize-none border border-transparent focus:border-primary-red/30"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary-red text-white title text-xl font-bold py-4 rounded-xl hover:bg-primary-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Get Started Now'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forms