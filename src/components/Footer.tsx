import React from 'react'
import { Wrench } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Wrench className="mr-2" />
            <span className="text-xl font-bold">Pro Plumbing Services</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-blue-200">Services</a></li>
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Pro Plumbing Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer