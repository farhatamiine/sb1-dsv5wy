import React from 'react'
import { Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-500" />
                <span>info@proplumbing.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 text-blue-500" />
                <span>Mon-Fri: 8am-6pm, Sat: 9am-2pm</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact