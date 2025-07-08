import React, { useState, useEffect } from 'react';

const TASKS = [
  'Book venue',
  'Send invites',
  'Hire photographer',
  'Order flowers',
  'Choose wedding dress',
  'Arrange catering',
  'Book entertainment',
  'Plan honeymoon',
  'Schedule hair & makeup',
  'Order cake',
  'Finalize guest list',
  'Arrange transportation',
  'Buy wedding rings',
  'Write vows',
  'Confirm vendors',
];

const STORAGE_KEY = 'weddingChecklist';

const WeddingTools = () => {
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const handleCheck = idx => {
    setChecked(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-heading text-pink-600 mb-6 text-center">Wedding Planning Checklist</h1>
      <div className="max-w-2xl mx-auto grid gap-4">
        {TASKS.map((task, idx) => (
          <div
            key={task}
            className={`flex items-center p-6 rounded-2xl shadow-md border-2 transition-all duration-200 bg-softwhite
              ${checked.includes(idx) ? 'border-pink-300 bg-blush' : 'border-beige hover:border-pink-200 hover:bg-lavender/40'}`}
          >
            <input
              type="checkbox"
              checked={checked.includes(idx)}
              onChange={() => handleCheck(idx)}
              className="form-checkbox h-6 w-6 text-pink-600 mr-4 accent-pink-600 transition-all duration-200"
              id={`task-${idx}`}
            />
            <label
              htmlFor={`task-${idx}`}
              className={`flex-1 text-lg font-body cursor-pointer transition-colors duration-200
                ${checked.includes(idx) ? 'line-through text-gray-400' : 'text-dark hover:text-pink-600'}`}
            >
              {task}
            </label>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 text-gray-600 font-body">
        {checked.length} of {TASKS.length} tasks completed
      </div>
    </div>
  );
};

export default WeddingTools; 