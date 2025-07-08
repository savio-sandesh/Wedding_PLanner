import React from 'react';

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-blush rounded-2xl shadow-md overflow-hidden mb-10">
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
        alt="Wedding Inspiration"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-heading text-dark mb-4 drop-shadow-lg">Plan Your Dream Wedding</h1>
        <p className="text-lg md:text-2xl font-body text-dark mb-8 max-w-2xl mx-auto">Discover inspiration, find trusted vendors, and organize every detail with LoverlyClone.</p>
        <a
          href="/tools"
          className="inline-block bg-pink-600 text-white font-body text-lg px-8 py-3 rounded-2xl shadow-md hover:bg-pink-700 transition-colors duration-200"
        >
          Start Planning
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blush via-beige/60 to-transparent" />
    </section>
    {/* Rest of Home content can go here */}
  </div>
);

export default Home; 