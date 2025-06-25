import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Correct import for React Router v6+
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import logoImg from '../../assets/Logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="bg-purple-950 px-4 lg:px-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-3">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="Logo" width="100px" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-300 lg:hidden focus:outline-none text-3xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </button>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full lg:flex lg:w-auto lg:items-center lg:space-x-8 `}
          >
            <ul className="flex flex-col lg:flex-row items-center mt-4 lg:mt-0  font-medium gap-7 lg:gap-5">
              {[
                { name: 'Home', to: '/' },
                { name: 'Experience', to: '/experience' },
                { name: 'About', to: '/about' },
                { name: 'Resume', to: '/resume' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-4 sm:py-1 sm:px-4 px-10 rounded-full duration-200 text-xl ${
                        isActive
                          ? 'bg-purple-300 text-purple-950'
                          : 'text-purple-300 hover:text-purple-800 hover:bg-purple-100'
                      }`
                    }
                    onClick={() => setIsOpen(false)} 
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/AnjleeDuseja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-4 text-purple-300 text-xl   hover:text-purple-800 hover:bg-purple-100 rounded-full duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
