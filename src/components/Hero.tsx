import React from 'react';
import { Youtube, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              World's most loved DevOps and Spiritual guru❤️
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Hello, I am Savinder - a DevOps Evangelist, Spiritual Alchemist, Author, Speaker, and Youtuber.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.youtube.com/@savinderpuri/featured" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://www.linkedin.com/in/savinderpuri/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/savinderpuri/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <img
                src="/assets/profile_pic.jpg"
                alt="Savinder Puri"
                className="rounded-full object-cover w-full h-full shadow-xl ring-2 ring-purple-400/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;