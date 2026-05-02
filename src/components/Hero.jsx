import React from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMessageCircle, FiCalendar, FiChevronRight } from 'react-icons/fi'

const Hero = ({ onBookNow }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
          alt="Premium taxi service"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent text-sm font-semibold">24/7 Service Available</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Reliable Taxi Service{' '}
              <span className="text-accent">in Mumbai</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Safe, Affordable & On-Time Travel Across Mumbai & Nearby Cities. 
              Professional drivers, clean cars, and unbeatable prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onBookNow}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FiCalendar className="w-5 h-5" />
                Book Now
                <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+919696832321"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-all border border-white/20"
              >
                <FiPhone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919696832321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all shadow-lg"
              >
                <FiMessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '10K+', label: 'Happy Riders' },
                { value: '50+', label: 'Cities Covered' },
                { value: '4.9', label: 'Star Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Car Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <img
                src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fgallery%2Fhyundai%2Faura%2Fexterior%2Fhyundai_aura_rear_look.jpg%3Fv%3D1767615690&w=1920&q=90"
                alt="Hyundai Aura - Premium Taxi"
                className="relative z-10 w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="eager"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="font-bold text-primary">4.9 Rating</div>
                    <div className="text-sm text-gray-500">Based on 2000+ reviews</div>
                  </div>
                </div>
              </motion.div>

              {/* Price Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -top-4 -right-4 z-20 bg-primary text-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-xs text-gray-400">Starting from</div>
                  <div className="text-2xl font-bold text-accent">₹299</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
