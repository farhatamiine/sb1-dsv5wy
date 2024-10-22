import React from 'react'

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Expert Plumbing Solutions</h1>
        <p className="text-xl mb-8">Fast, reliable, and professional service for all your plumbing needs</p>
        <a href="#contact" className="bg-white text-blue-500 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">Get a Quote</a>
      </div>
    </div>
  )
}

export default Hero