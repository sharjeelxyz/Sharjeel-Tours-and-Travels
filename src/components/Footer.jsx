import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiHeart } from 'react-icons/fi'
import { FaCar } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-accent/20 rounded-xl">
                <FaCar className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xl font-bold">Sharjeel</span>
                <span className="block text-xs text-gray-400 -mt-1">Tours & Travels</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for safe, comfortable, and affordable taxi services in Mumbai and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919696832321"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500/20 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-green-500 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="tel:+919696832321"
                className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <FiPhone className="w-5 h-5 text-accent hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Routes', 'Why Us', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-accent text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {['Local Travel', 'Outstation Trips', 'Airport Transfer', 'Hourly Rental'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FiPhone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-gray-400">
                  <div>+91 9696832321</div>
                  <div>+91 8881338051</div>
                  <div>+91 7408279458</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 break-all">
                  bookings.sharjeeltravels@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2026 Sharjeel Tours & Travels. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <FiHeart className="w-4 h-4 text-red-500 fill-red-500" /> in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
