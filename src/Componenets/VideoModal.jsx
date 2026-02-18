import React from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const VideoModal = ({ isOpen, onClose, videoId = "ScMzIvxBSi4" }) => {
    return createPortal(
        // animate presence 
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-[100] p-2 bg-white/10 hover:bg-primary-red text-white rounded-full transition-all duration-300 backdrop-blur-sm group"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Video Container */}
                        <div className="w-full h-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="Product Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
                
            )}
        </AnimatePresence>,
        document.body
    )
}

export default VideoModal
