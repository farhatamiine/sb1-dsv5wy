import React from 'react'
import { Droplet, Wrench, Thermometer } from 'lucide-react'

const services = [
  { icon: Droplet, title: 'Leak Repair', description: 'Quick and efficient leak detection and repair services.' },
  { icon: Wrench, title: 'Installation', description: 'Expert installation of fixtures, pipes, and appliances.' },
  { icon: Thermometer, title: 'Water Heaters', description: 'Installation, repair, and maintenance of water heaters.' },
]

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <service.icon className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services