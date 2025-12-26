import React, { useState } from 'react';
import { FaSave, FaGlobe, FaEnvelope, FaLock } from 'react-icons/fa';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: "Nada Sellami Portfolio",
    email: "contact@nadasellami.com",
    maintenanceMode: false,
    language: "fr"
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setSettings({ ...settings, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Paramètres sauvegardés avec succès !');
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Paramètres Généraux</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-100">

          {/* Site Identity */}
          <div className="p-8 space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaGlobe className="text-blue-600" /> Identité du site
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom du site</label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Langue par défaut</label>
                <select
                  name="language"
                  value={settings.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="ar">Arabe</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-8 space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> Contact
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email de contact</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="text-sm text-gray-500 mt-1">Cet email recevra les messages du formulaire de contact.</p>
            </div>
          </div>

          {/* Security */}
          <div className="p-8 space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaLock className="text-blue-600" /> Sécurité & Maintenance
            </h2>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div>
                <h3 className="font-medium">Mode Maintenance</h3>
                <p className="text-sm text-gray-500">Rendre le site inaccessible au public</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-gray-50 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <FaSave />
              Enregistrer les modifications
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminSettings;
