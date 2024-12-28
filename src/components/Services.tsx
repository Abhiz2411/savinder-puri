import React from 'react';
import { Code2, Heart, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-purple-400" />,
      title: 'DevOps Consulting',
      description: 'Implementation of DevOps best practices and transformation strategies',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-400" />,
      title: 'Spiritual Guidance',
      description: 'Leveraging spirituality for professional and personal success',
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-400" />,
      title: 'Speaking & Training',
      description: 'Engaging speaking sessions and collaborative workshops',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;