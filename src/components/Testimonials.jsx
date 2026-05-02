import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiStar } from 'react-icons/fi'
import { HiOutlineChatBubbleBottomCenterText as Quote } from 'react-icons/hi2'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Absolutely fantastic service! The driver was punctual, the car was spotless, and the ride was smooth. I use Sharjeel Travels for all my Mumbai business trips now. Highly recommended!',
  },
  {
    name: 'Priya Patel',
    role: 'Family Vacation',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'We booked a trip to Lonavala for our family weekend. The driver was courteous and knew all the best routes. The kids loved the comfortable ride. Will definitely book again!',
  },
  {
    name: 'Amit Kumar',
    role: 'Airport Transfer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'My flight landed at 2 AM and the driver was right there waiting. Professional, helpful with luggage, and got me home safely. Best airport transfer service in Mumbai!',
  },
  {
    name: 'Sneha Desai',
    role: 'Regular Commuter',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'I commute daily from Thane to BKC and Sharjeel Travels has made my life so much easier. Affordable rates, always on time, and the drivers are extremely professional.',
  },
  {
    name: 'Vikram Mehta',
    role: 'Outstation Trip',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: 'Booked a trip to Nashik for a wine tour. The entire experience was seamless from booking to drop-off. The car was premium and the driver knew all the good spots. 10/10!',
  },
]

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="reviews" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{testimonial.text}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonials for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{testimonial.text}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
