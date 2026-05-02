import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiNavigation, FiClock } from 'react-icons/fi'
import { FaPlane } from 'react-icons/fa'

const services = [
  {
    icon: FiMapPin,
    title: 'Local Travel',
    description: 'Hassle-free local taxi service across Mumbai. From Bandra to Borivali, we cover every corner of the city with professional drivers.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: FiNavigation,
    title: 'Outstation Trips',
    description: 'Plan your weekend getaways with our comfortable outstation cabs. Mumbai to Pune, Nashik, Lonavala & more destinations.',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: FaPlane,
    title: 'Airport Transfer',
    description: 'Never miss a flight with our punctual airport pickup and drop services. Available for both domestic and international terminals.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: FiClock,
    title: 'Hourly Rentals',
    description: 'Need a car for the whole day? Our hourly rental service gives you the flexibility to travel at your own pace.',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From local commutes to outstation adventures, we've got all your travel needs covered with premium service.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              <div className={`w-14 h-14 ${service.lightColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.textColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/919696832321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold ${service.textColor} hover:underline`}
                >
                  Book Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
