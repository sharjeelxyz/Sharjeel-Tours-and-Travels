import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiArrowRight, FiClock } from 'react-icons/fi'
import { FaIndianRupeeSign } from 'react-icons/fa6'

const routes = [
  {
    from: 'Mumbai',
    to: 'Pune',
    distance: '150 km',
    duration: '3 hrs',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80',
    description: 'Scenic drive through the Western Ghats',
  },
  {
    from: 'Mumbai',
    to: 'Nashik',
    distance: '170 km',
    duration: '3.5 hrs',
    price: '₹2,999',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=600&q=80',
    description: 'Wine country and spiritual destination',
  },
  {
    from: 'Mumbai',
    to: 'Lonavala',
    distance: '85 km',
    duration: '2 hrs',
    price: '₹1,999',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80',
    description: 'Hill station getaway near Mumbai',
  },
  {
    from: 'Mumbai',
    to: 'Shirdi',
    distance: '240 km',
    duration: '5 hrs',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    description: 'Pilgrimage to Sai Baba Temple',
  },
  {
    from: 'Mumbai',
    to: 'Mahabaleshwar',
    distance: '260 km',
    duration: '5.5 hrs',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    description: 'Queen of hill stations',
  },
  {
    from: 'Mumbai',
    to: 'Alibaug',
    distance: '95 km',
    duration: '2.5 hrs',
    price: '₹2,199',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    description: 'Beach destination and coastal retreat',
  },
]

const PopularRoutes = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="routes" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Popular Routes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Top Destinations from Mumbai
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most traveled routes with transparent pricing and comfortable rides.
          </p>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <motion.div
              key={route.to}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <FiMapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{route.distance}</span>
                    <span className="text-white/60">•</span>
                    <FiClock className="w-4 h-4" />
                    <span className="text-sm font-medium">{route.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-primary">{route.from}</span>
                  <FiArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-bold text-primary">{route.to}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{route.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <FaIndianRupeeSign className="w-4 h-4 text-accent" />
                    <span className="text-2xl font-bold text-primary">{route.price}</span>
                    <span className="text-sm text-gray-400">onwards</span>
                  </div>
                  <a
                    href={`https://wa.me/919696832321?text=Hi, I want to book a taxi from ${route.from} to ${route.to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularRoutes
