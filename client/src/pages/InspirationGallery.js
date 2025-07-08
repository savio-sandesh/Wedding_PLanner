import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import inspirationData from './inspirationData.json';

const categories = ['All', 'Dresses', 'Decor', 'Flowers', 'Venues'];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const InspirationGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? inspirationData
      : inspirationData.filter(img => img.category === selectedCategory);

  return (
    <div>
      <h1 className="text-4xl font-bold text-pink-600 mb-4 text-center">Inspiration Gallery</h1>
      <div className="flex justify-center mb-6 space-x-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 font-medium mb-2 ${
              selectedCategory === cat
                ? 'bg-pink-600 text-white border-pink-600'
                : 'bg-white text-pink-600 border-pink-300 hover:bg-pink-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map(img => (
          <div key={img.id} className="mb-6 rounded overflow-hidden shadow hover:shadow-lg transition-shadow bg-white">
            <img src={img.url} alt={img.alt} className="w-full object-cover" />
            <div className="p-2 text-center text-sm text-gray-600">{img.category}</div>
          </div>
        ))}
      </Masonry>
      <style>{`
        .my-masonry-grid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          margin-left: -1rem;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 1rem;
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default InspirationGallery; 