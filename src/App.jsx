import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import Services from './components/Services'
import PopularRoutes from './components/PopularRoutes'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  const [showBooking, setShowBooking] = useState(false)

  useEffect(() => {
    // Preload critical images
    const img = new Image()
    img.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80'
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBookNow={() => setShowBooking(true)} />
      <Hero onBookNow={() => setShowBooking(true)} />
      <BookingForm isOpen={showBooking} onClose={() => setShowBooking(false)} />
      <Services />
      <PopularRoutes />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
