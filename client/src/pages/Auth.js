import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password || (!isLogin && !form.confirmPassword)) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!isLogin && form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Placeholder for authentication logic
    alert(`${isLogin ? 'Login' : 'Register'} submitted!`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md mt-8">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">{isLogin ? 'Login' : 'Register'}</h1>
      <p className="mb-6">{isLogin ? 'Login to your account.' : 'Register a new account.'}</p>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
            required
          />
        </div>
        {!isLogin && (
          <div>
            <label className="block mb-1 font-semibold" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
              required
            />
          </div>
        )}
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition-colors"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <div className="mt-4 text-center">
        {isLogin ? (
          <span>
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-pink-600 hover:underline">Register here</a>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <a href="/login" className="text-pink-600 hover:underline">Login here</a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Auth; 