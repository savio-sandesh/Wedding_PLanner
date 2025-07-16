import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const blogContent = {
  'wedding-inspiration-and-ideas': `Every wedding begins with a dream. Whether it’s a beach ceremony at sunset or a cozy garden celebration, gathering wedding inspiration helps define your style. Browse Pinterest boards, wedding magazines, and Instagram to explore themes like rustic, modern, bohemian, or traditional. Think about color palettes, seasonal decor, lighting, and floral arrangements that speak to your love story. Get inspired by real weddings, celebrity ceremonies, or even cultural traditions. Your wedding is a reflection of you as a couple—use ideas as a starting point, then add your unique flair. Remember, the best inspiration often comes from the heart.`
};

const formatTitle = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const BlogTopic = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const content = blogContent[slug];
  const [likeAnimate, setLikeAnimate] = useState(false);
  const [dislikeAnimate, setDislikeAnimate] = useState(false);

  const handleLike = () => {
    setLikeAnimate(true);
    setTimeout(() => setLikeAnimate(false), 300);
  };
  const handleDislike = () => {
    setDislikeAnimate(true);
    setTimeout(() => setDislikeAnimate(false), 300);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <button
        className="mb-6 px-4 py-2 bg-pink-100 text-pink-700 rounded hover:bg-pink-200 transition-colors"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold text-pink-600 mb-6">{formatTitle(slug)}</h1>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <p className="text-lg text-gray-700 whitespace-pre-line mb-8">
          {content || 'More content coming soon.'}
        </p>
        <div className="flex flex-row items-center justify-center space-x-8 mt-8">
          <button
            className={`w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-700 shadow hover:bg-green-200 hover:scale-110 active:scale-95 transition-all duration-200 text-2xl ${likeAnimate ? 'scale-125' : ''}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <FaThumbsUp />
          </button>
          <button
            className={`w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-700 shadow hover:bg-red-200 hover:scale-110 active:scale-95 transition-all duration-200 text-2xl ${dislikeAnimate ? 'scale-125' : ''}`}
            onClick={handleDislike}
            aria-label="Dislike"
          >
            <FaThumbsDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTopic; 