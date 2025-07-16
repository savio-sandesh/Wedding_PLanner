import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Contact us to get best deals</h2>
        <div className="space-y-4 text-base">
          <div>
            <span className="font-semibold text-pink-600">For Vendors</span><br />
            <span>vendors@wedmegood.com</span><br />
            <span>0124-6812346</span>
          </div>
          <div>
            <span className="font-semibold text-pink-600">For Users</span><br />
            <span>info@wedmegood.com</span><br />
            <span>0124-6812345</span>
          </div>
          <div>
            <span className="font-semibold text-pink-600">Registered Address</span><br />
            <span>Second Floor, Ocus Technopolis, Sector 54 Golf Course Road, Gurgaon, Haryana, India, 122002</span>
          </div>
        </div>
      </div>
      {/* Follow Us */}
      <div className="flex-1 md:ml-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Follow Us</h2>
        <div className="flex space-x-6 text-3xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
    {/* Testimonial Section */}
    <section className="my-16 bg-beige p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <div className="flex-1 bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg italic mb-4">“7HeavenWeds made planning our wedding so much easier! The vendor search was a lifesaver.”</p>
          <div className="font-semibold text-pink-600">— Emily & James</div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg italic mb-4">“We found so much inspiration in the gallery and loved how organized everything was.”</p>
          <div className="font-semibold text-pink-600">— Priya & Arjun</div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-xl shadow text-center">
          <p className="text-lg italic mb-4">“The tools helped us keep track of every detail. Highly recommend!”</p>
          <div className="font-semibold text-pink-600">— Sarah & Alex</div>
        </div>
      </div>
    </section>
  </div>
);

export default Home; 