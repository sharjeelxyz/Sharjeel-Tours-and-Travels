import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiShield, FiClock, FiAward, FiHeadphones } from 'react-icons/fi'
import { FaCar, FaWallet } from 'react-icons/fa'

const features = [
  {
    icon: FiShield,
    title: 'Professional Drivers',
    description: 'All our drivers are verified, experienced, and trained to provide you with a safe and comfortable journey.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaCar,
    title: 'Clean & Comfortable Cars',
    description: 'Our fleet is regularly maintained and sanitized. Travel in comfort with AC, music, and ample luggage space.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaWallet,
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden charges. Get the best value for your money with transparent billing.',
    color: 'from-accent to-accent-dark',
  },
  {
    icon: FiClock,
    title: '24/7 Service',
    description: 'Whether it is early morning or late night, we are always available. Book anytime, travel anytime.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiAward,
    title: 'On-Time Guarantee',
    description: 'We value your time. Our drivers arrive promptly and ensure you reach your destination on schedule.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is always ready to assist you with bookings, queries, or any concerns.',
    color: 'from-teal-500 to-teal-600',
  },
]

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="why-us" className="py-20 bg-primary-dark relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Sharjeel Advantage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We go the extra mile to ensure your journey is safe, comfortable, and memorable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
