import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
//  heres the modal componenet 
const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        email: '',
        company: '',
        employees: '',
        phone: '',
        bestTime: '',
        comments: '',
        requireDemo: false,
        requireQuote: false,
        requireContact: false
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const loadingToast = toast.loading('Sending your demo request...')

        try {
            const response = await axios.post('https://processiqtech.com/php/send_email_dynamic.php', formData)

            if (response.data.status === 'success' || response.status === 200) {
                toast.success('Request sent successfully!', { id: loadingToast })
                setFormData({
                    name: '',
                    position: '',
                    email: '',
                    company: '',
                    employees: '',
                    phone: '',
                    bestTime: '',
                    comments: '',
                    requireDemo: false,
                    requireQuote: false,
                    requireContact: false
                })
                setTimeout(() => onClose(), 2000)
            } else {
                toast.error(response.data.message || 'Something went wrong', { id: loadingToast })
            }
        } catch (error) {
            toast.error('Failed to send request. Please try again.', { id: loadingToast })
            console.error('Submission error:', error)
        } finally {
            setLoading(false)
        }
    }

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100">
                            <h2 className="text-2xl sm:text-3xl font-bold text-primary-red">Request A Demo</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary-red"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="p-6 sm:p-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Name"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Job Position</label>
                                        <select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors bg-white text-gray-700"
                                        >
                                            <option value="" disabled>Select Position</option>
                                            <option value="hr">HR Manager</option>
                                            <option value="ceo">CEO / Director</option>
                                            <option value="manager">Manager</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Email"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your company Name"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Total Employees in Company</label>
                                        <input
                                            type="text"
                                            name="employees"
                                            value={formData.employees}
                                            onChange={handleChange}
                                            required
                                            placeholder="Total Employees in Company"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-black">Your Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Phone Number"
                                            className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Full Width Fields */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-black">Best Time to Contact</label>
                                <input
                                    type="text"
                                    name="bestTime"
                                    value={formData.bestTime}
                                    onChange={handleChange}
                                    required
                                    placeholder="E.g. 09:30 AM to 05:30 PM GMT"
                                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-black">Comments</label>
                                <textarea
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    required
                                    placeholder="Do you have any additional question?"
                                    rows="2"
                                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary-red transition-colors placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            {/* Checkboxes */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-primary-black">I Require</label>
                                <div className="flex flex-wrap gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-primary-red transition-colors">
                                            <input
                                                type="checkbox"
                                                name="requireDemo"
                                                checked={formData.requireDemo}
                                                onChange={handleChange}
                                                className="peer w-0 h-0 opacity-0"
                                            />
                                            <div className="w-3 h-3 bg-primary-red rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-primary-black">Free Demo</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-primary-red transition-colors">
                                            <input
                                                type="checkbox"
                                                name="requireQuote"
                                                checked={formData.requireQuote}
                                                onChange={handleChange}
                                                className="peer w-0 h-0 opacity-0"
                                            />
                                            <div className="w-3 h-3 bg-primary-red rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-primary-black">Price Quote</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-primary-red transition-colors">
                                            <input
                                                type="checkbox"
                                                name="requireContact"
                                                checked={formData.requireContact}
                                                onChange={handleChange}
                                                className="peer w-0 h-0 opacity-0"
                                            />
                                            <div className="w-3 h-3 bg-primary-red rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-primary-black">Contact Me</span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-primary-red text-white font-bold py-3 px-10 rounded hover:bg-primary-black transition-colors duration-300 shadow-lg disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default Modal