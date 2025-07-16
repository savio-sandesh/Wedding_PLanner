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
    {/* Contact Us and Follow Us Section */}
    <section className="mt-16 mb-8 flex flex-col md:flex-row gap-8 justify-between items-start bg-white p-8 rounded-2xl shadow-md">
      {/* Contact Us */}
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="contactName">Name</label>
            <input type="text" id="contactName" name="contactName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="contactEmail">Email</label>
            <input type="email" id="contactEmail" name="contactEmail" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="contactMessage">Message</label>
            <textarea id="contactMessage" name="contactMessage" rows="3" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200" required></textarea>
          </div>
          <button type="submit" className="bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-pink-700 transition-colors">Send</button>
        </form>
      </div>
      {/* Follow Us */}
      <div className="flex-1 md:ml-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Follow Us</h2>
        <div className="flex space-x-6 text-3xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700" aria-label="Instagram">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Home; 