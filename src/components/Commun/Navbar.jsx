import React, { useState } from 'react';
import { FaBell, FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const user = {
    name: "Nada Sellami",
    email: "sellaminada82@gmail.com",
    avatar: "/vite.svg",
    notifications: 3
  };

  const navigation = [
    { name: 'Profil', path: '/', current: true },
    { name: 'À propos', path: '/about', current: false },
    { name: 'Expérience', path: '/experience', current: false },
    { name: 'Projets', path: '/projects', current: false },
    { name: 'Contact', path: '/contact', current: false },
  ];

  const userNavigation = [
    { name: 'Votre profil', href: '#profile', icon: <FaUser /> },
    { name: 'Paramètres', href: '#settings', icon: <FaCog /> },
    { name: 'Déconnexion', href: '#signout', icon: <FaSignOutAlt /> },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo and Main Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  21C
                </div>
                <span className="hidden lg:block text-white font-bold text-lg">
                  21C Digital
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center gap-3 rounded-md px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    <span className="text-gray-500">{item.icon}</span>
                    {item.name}
                  </Link>

                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Notifications & Profile */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center gap-4">

              {/* Notifications Button */}
              {/* <button
                type="button"
                className="relative rounded-full p-2 text-gray-400 hover:text-black hover:bg-gray-800 transition"
              >
                <span className="sr-only">View notifications</span>
                <FaBell className="h-6 w-6" />
                {user.notifications > 0 && (
                  <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold shadow-lg">
                    {user.notifications}
                  </span>
                )}
              </button> */}

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                >
                  <img
                    className="h-10 w-10 rounded-full ring-2 ring-gray-700 hover:ring-blue-500 transition"
                    src={user.avatar}
                    alt={user.name}
                  />
                  <span className="hidden lg:block text-black font-medium">
                    {user.name}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-2">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-3 rounded-md px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <span className="text-gray-500">{item.icon}</span>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          {/* Mobile Navigation Links */}
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition ${item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                aria-current={item.current ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile User Section */}
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full ring-2 ring-gray-700"
                  src={user.avatar}
                  alt={user.name}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm font-medium text-gray-400">{user.email}</div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-700 transition"
              >
                <span className="sr-only">View notifications</span>
                <FaBell className="h-6 w-6" />
                {user.notifications > 0 && (
                  <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                    {user.notifications}
                  </span>
                )}
              </button>
            </div>

            <div className="mt-3 space-y-1 px-4">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
