import React from 'react';

const Books = () => {
  const books = [
    {
      title: 'How do I build a career in DevOps?',
      image: './public/assets/book_1.jpg',
      link: 'https://amzn.to/3QOka0Q',
    },
    {
      title: 'Spirituality & Success',
      image: './public/assets/book_2.jpg',
      link: 'https://www.amazon.in/Spirituality-Success-guide-spirituality-success/dp/9395192682',
    },
  ];

  return (
    <section id="books" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Books</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <a key={index} href={book.link} target="_blank" rel="noopener noreferrer"
              className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow border border-gray-700">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6">{book.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;