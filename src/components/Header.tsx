import React from 'react'
import { Wrench } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
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
    </header>
  )
}

export default Header