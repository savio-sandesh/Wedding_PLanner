import React from 'react';
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">{isLogin ? 'Login' : 'Register'}</h1>
      <p>{isLogin ? 'Login to your account.' : 'Register a new account.'}</p>
    </div>
  );
};

export default Auth; 