// Pages/AdminLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>

        <nav className="mt-6 flex-1">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaHome />
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaUsers />
            Utilisateurs
          </Link>
          <Link
            to="/admin/analytics"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaChartBar />
            Statistiques
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaCog />
            Paramètres
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition text-gray-400 hover:text-white"
          >
            <FaHome />
            Retour au site
          </Link>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-6 py-3 hover:bg-red-600 transition text-red-400 hover:text-white rounded-lg mt-2"
          >
            <FaSignOutAlt />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Contenu Admin */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
