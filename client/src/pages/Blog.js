import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogTopics = [
  'Wedding inspiration and ideas',
  'Before the wedding',
  'The wedding ceremony',
  'The wedding banquet',
  'The services for your wedding',
  'Wedding fashion',
  'Health and beauty',
  'Honeymoon',
  'After the wedding',
  'The wedding reception',
];

const Blog = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topic) => {
    // Create a URL-friendly slug for the topic
    const slug = topic.toLowerCase().replace(/ /g, '-');
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogTopics.map((topic, idx) => (
          <button
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center text-center hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-pink-300"
            onClick={() => handleTopicClick(topic)}
          >
            <h2 className="text-xl font-semibold text-dark">{topic}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
