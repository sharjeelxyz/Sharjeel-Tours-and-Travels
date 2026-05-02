import React from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMessageCircle } from 'react-icons/fi'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919696832321"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919696832321"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-accent hover:bg-accent-dark text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-colors"
        aria-label="Call Now"
      >
        <FiPhone className="w-6 h-6" />
      </motion.a>
    </div>
  )
}

export default FloatingButtons
