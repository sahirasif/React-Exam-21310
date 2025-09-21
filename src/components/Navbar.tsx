import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const Navbar: React.FC = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link to="/">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
        </Link>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
          >
            Docs
          </a>
          <a
            href="#"
            className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
          >
            Examples
          </a>
          <a
            href="#"
            className="mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
          >
            Blog
          </a>
        </div>
        {isLoggedIn && (
          <div>
            <button
              onClick={handleLogout}
              className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;