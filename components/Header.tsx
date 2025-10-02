'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"
        style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a 
              href="/"
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/logo.svg"
                alt="Rich Identity Logo"
                className="h-8 w-auto"
              />
              <div>
                <span className="text-lg font-bold text-white">Rich Identity</span>
                <p className="text-xs text-yellow-400 -mt-1">Transformation Architect</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">
                About
              </a>
              <a href="/book" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">
                The Identity Code
              </a>
              <a href="/challenge" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">
                Challenge
              </a>
              <a href="/programs" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">
                Mastery Program
              </a>
              <a href="/assessment" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">
                Assessment
              </a>
              <a href="/book-vsl" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Get The Book
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/90 hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 rounded-b-xl"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <div className="px-4 py-4 space-y-3">
                <a 
                  href="/about" 
                  className="block text-white/90 hover:text-yellow-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/book" 
                  className="block text-white/90 hover:text-yellow-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The Identity Code
                </a>
                <a 
                  href="/challenge" 
                  className="block text-white/90 hover:text-yellow-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Challenge
                </a>
                <a 
                  href="/programs" 
                  className="block text-white/90 hover:text-yellow-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mastery Program
                </a>
                <a 
                  href="/assessment" 
                  className="block text-white/90 hover:text-yellow-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assessment
                </a>
                <a 
                  href="/book-vsl" 
                  className="block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get The Book
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </div>
  )
}