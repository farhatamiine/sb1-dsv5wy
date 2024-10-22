import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="Plumber at work" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Our Services</h2>
            <p className="mb-4">
              With over 20 years of experience, our team of skilled plumbers is dedicated to providing top-notch plumbing services to residential and commercial clients. We pride ourselves on our attention to detail, punctuality, and customer satisfaction.
            </p>
            <p>
              From minor repairs to major installations, we have the expertise to handle all your plumbing needs. Our commitment to using the latest technology and best practices ensures that we deliver efficient and long-lasting solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About