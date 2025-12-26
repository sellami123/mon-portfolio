// components/Admin/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const AdminLayout = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/admin', icon: FaHome },
    { name: 'Utilisateurs', path: '/admin/users', icon: FaUsers },
    { name: 'Statistiques', path: '/admin/analytics', icon: FaChartBar },
    { name: 'Paramètres', path: '/admin/settings', icon: FaCog },
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-gradient-to-b from-blue-900 to-blue-800 shadow-2xl`}
        style={{ width: '280px' }}
      >
        <div className="h-full px-4 py-6 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                21C
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Admin Panel</h2>
                <p className="text-blue-300 text-xs">Gestion du site</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'
                    }`}
                >
                  <Icon className="text-xl" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-4 right-4">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-200"
            >
              <FaSignOutAlt className="text-xl" />
              <span className="font-medium">Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[280px]' : 'ml-0'}`}>
        {/* Top Bar */}
        <header className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              >
                {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  {navigation.find(item => isActive(item.path))?.name || 'Dashboard'}
                </h1>
                <p className="text-sm text-blue-600">Bienvenue dans votre espace admin</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-blue-900">Nada Sellami</p>
                <p className="text-xs text-blue-600">Administrateur</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                NS
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
