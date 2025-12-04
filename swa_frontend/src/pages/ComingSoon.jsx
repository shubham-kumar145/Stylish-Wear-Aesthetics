import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ComingSoon = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl bg-gray-850 rounded-3xl shadow-2xl p-10 text-center border border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 tracking-wide uppercase">
          Coming Soon
        </h1>

        <p className="text-gray-300 mb-8 text-lg md:text-xl leading-relaxed">
          A brand new shopping experience is on its way!
          <br /> From deals to style — we’re crafting something you'll love. 🛒
        </p>

        {/* Terminal-style preview */}
        <div className="bg-black rounded-xl text-left p-5 font-mono text-sm text-green-400 leading-relaxed mb-8 shadow-inner border border-green-600">
          <p className="text-green-500">$</p>
          <p>$ git clone best-deals-ever</p>
          <p>$ cd shop-frontend</p>
          <p className="animate-pulse">$ launching ultimate shopping cart...</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300 text-center"
          >
            🏠 Back to Home
          </NavLink>

          {user?.role === 'admin' && (
            <NavLink
              to="/adminpage"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 text-center"
            >
              🛠 Admin Panel
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
