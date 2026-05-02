import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPhone, FiMail, FiMapPin, FiClock, FiExternalLink } from 'react-icons/fi'

const phoneNumbers = [
  { number: '9696832321', label: 'Primary' },
  { number: '8881338051', label: 'Secondary' },
  { number: '7408279458', label: 'Support' },
]

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to book a ride? Reach out to us anytime. We're here to help 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Phone Numbers */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <FiPhone className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary">Phone Numbers</h3>
              </div>
              <div className="space-y-3">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:+91${phone.number}`}
                    className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-primary">+91 {phone.number}</div>
                      <div className="text-sm text-gray-400">{phone.label}</div>
                    </div>
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <FiPhone className="w-4 h-4 text-accent group-hover:text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary">Email Us</h3>
              </div>
              <a
                href="mailto:bookings.sharjeeltravels@gmail.com"
                className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all group"
              >
                <div>
                  <div className="font-semibold text-primary text-sm">bookings.sharjeeltravels@gmail.com</div>
                </div>
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                  <FiExternalLink className="w-4 h-4 text-secondary group-hover:text-white" />
                </div>
              </a>
            </div>

            {/* Location & Hours */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Location</h3>
                </div>
                <p className="text-gray-600 text-sm">Mumbai, Maharashtra, India</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Working Hours</h3>
                </div>
                <p className="text-gray-600 text-sm">24/7 - All Days</p>
              </div>
            </div>
          </motion.div>
           <div className="pr-[10px] sm:pr-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl w-full overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-full min-h-[300px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709661!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharjeel Tours & Travels Location"
              className="w-full h-full"
            />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
