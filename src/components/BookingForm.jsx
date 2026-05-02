import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiSend, FiPhone, FiMapPin, FiCalendar, FiClock, FiUser, FiCheckCircle } from 'react-icons/fi'

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    serviceType: 'local',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Create WhatsApp message
    const message = `*New Booking Request - Sharjeel Tours & Travels*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pickup:* ${formData.pickup}%0A` +
      `*Drop:* ${formData.drop}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Service:* ${formData.serviceType}%0A%0A` +
      `Please confirm this booking.`

    // Open WhatsApp
    window.open(`https://wa.me/919696832321?text=${message}`, '_blank')

    // Simulate email sending (replace with EmailJS in production)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
        setFormData({
          name: '',
          phone: '',
          pickup: '',
          drop: '',
          date: '',
          time: '',
          serviceType: 'local',
        })
      }, 3000)
    }, 1500)
  }

  const inputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-gray-800 placeholder-gray-400"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Book Your Ride</h3>
                <p className="text-gray-400 text-sm mt-1">Fill details and we'll get back to you</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Booking Sent!</h4>
                  <p className="text-gray-500">We'll contact you shortly to confirm your ride.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <FiUser className="w-4 h-4 inline mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <FiPhone className="w-4 h-4 inline mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <FiMapPin className="w-4 h-4 inline mr-1" />
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      name="pickup"
                      required
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="e.g., Mumbai Airport Terminal 2"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      <FiMapPin className="w-4 h-4 inline mr-1" />
                      Drop Location
                    </label>
                    <input
                      type="text"
                      name="drop"
                      required
                      value={formData.drop}
                      onChange={handleChange}
                      placeholder="e.g., Pune City Center"
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <FiCalendar className="w-4 h-4 inline mr-1" />
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        <FiClock className="w-4 h-4 inline mr-1" />
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="local">Local Travel</option>
                      <option value="outstation">Outstation Trip</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="hourly">Hourly Rental</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Booking Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    Your booking will be sent via WhatsApp for quick confirmation
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingForm
