import React, { useState } from 'react';
import vendorData from './vendorData.json';

const getUnique = (arr, key) => [ ...new Set(arr.map(item => item[key])) ];

const categories = getUnique(vendorData, 'category');
const locations = getUnique(vendorData, 'location');
const priceRanges = getUnique(vendorData, 'priceRange');

const VendorSearch = () => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: ''
  });

  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredVendors = vendorData.filter(vendor =>
    (!filters.category || vendor.category === filters.category) &&
    (!filters.location || vendor.location === filters.location) &&
    (!filters.priceRange || vendor.priceRange === filters.priceRange)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Vendor Search</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="border rounded px-4 py-2 focus:outline-pink-500"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="border rounded px-4 py-2 focus:outline-pink-500"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="border rounded px-4 py-2 focus:outline-pink-500"
        >
          <option value="">All Price Ranges</option>
          {priceRanges.map(pr => (
            <option key={pr} value={pr}>{pr}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredVendors.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No vendors found.</div>
        ) : (
          filteredVendors.map(vendor => (
            <div key={vendor.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <img src={vendor.photo} alt={vendor.name} className="h-48 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-pink-600 mb-1">{vendor.name}</h2>
                <div className="text-gray-500 text-sm mb-2">{vendor.category} &bull; {vendor.location}</div>
                <div className="text-gray-700 mb-2 flex-1">{vendor.description}</div>
                <div className="text-pink-500 font-bold">{vendor.priceRange}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VendorSearch; 