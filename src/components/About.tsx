import React from 'react';
import { Award, Book, Mic } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'DevOps Leadership',
      description: 'Global DevOps Ambassador & CDF Ambassador',
    },
    {
      icon: <Book className="w-8 h-8 text-purple-400" />,
      title: 'Published Author',
      description: 'Author of multiple books on DevOps and Spirituality',
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      title: 'Recognized Leader',
      description: '10 most dynamic leaders to watch - Business Sight',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          About Me
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          I help enterprises solve business problems with technology solutions and leverage spirituality 
          to achieve success and happiness.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <div key={index}
              className="p-8 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="mb-6">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;