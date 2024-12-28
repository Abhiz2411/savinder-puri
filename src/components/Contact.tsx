import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Connect</h2>
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
          <Mail className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <p className="text-xl mb-6 text-gray-300">
            For collaborations, email me at:
          </p>
          <a href="mailto:savinderpuri@gmail.com?subject=COLLABORATE"
            className="text-purple-400 hover:text-purple-300 font-semibold text-lg">
            savinderpuri@gmail.com
          </a>
          <p className="text-gray-400 mt-4">
            Please include the subject line "COLLABORATE"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;