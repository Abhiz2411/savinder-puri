import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          Made with ❤️ by{' '}
          <a href="https://abhijit-zende.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 font-semibold">
            Abhijit Zende
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;