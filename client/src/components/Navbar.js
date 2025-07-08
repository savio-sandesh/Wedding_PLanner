import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/inspiration', label: 'Inspiration Gallery' },
  { to: '/vendors', label: 'Vendor Search' },
  { to: '/tools', label: 'Wedding Tools' },
  { to: '/blog', label: 'Blog' },
  { to: '/login', label: 'Login/Register' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-softwhite shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-heading text-pink-600 tracking-tight">7HeavenWeds</Link>
        <div className="space-x-2 md:space-x-6 flex items-center">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-lg px-3 py-2 rounded-2xl transition-colors duration-200
                ${location.pathname === link.to ? 'bg-blush text-dark font-semibold' : 'text-dark hover:bg-lavender hover:text-pink-600'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 