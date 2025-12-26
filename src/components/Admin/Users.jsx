// Pages/Admin/Users.jsx
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

const AdminUsers = () => {
  // 1. READ: État initial avec des données simulées
  const [users, setUsers] = useState([
    { id: 1, name: "Nada Sellami", email: "contact@nadasellami.com", role: "Admin", status: "Actif" },
    { id: 2, name: "Client Test", email: "client@test.com", role: "User", status: "Actif" },
    { id: 3, name: "John Doe", email: "john@example.com", role: "Editor", status: "Inactif" }
  ]);

  // État pour le formulaire (Create/Update)
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '', role: 'User', status: 'Actif' });
  const [showForm, setShowForm] = useState(false);

  // 2. CREATE: Ajouter un utilisateur
  const addUser = (e) => {
    e.preventDefault();
    const newUser = { ...currentUser, id: Date.now() }; // ID unique basé sur le temps
    setUsers([...users, newUser]);
    resetForm();
  };

  // 3. UPDATE: Mettre à jour un utilisateur existant
  const updateUser = (e) => {
    e.preventDefault();
    setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
    resetForm();
  };

  // 4. DELETE: Supprimer un utilisateur
  const deleteUser = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // Préparer le formulaire pour la modification
  const editRow = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setShowForm(true);
  };

  // Réinitialiser le formulaire
  const resetForm = () => {
    setIsEditing(false);
    setCurrentUser({ id: null, name: '', email: '', role: 'User', status: 'Actif' });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des Utilisateurs (CRUD)</h1>
        <button
          onClick={() => { resetForm(); setShowForm(!showForm); }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
        >
          {showForm ? <FaTimes /> : <FaPlus />}
          {showForm ? 'Fermer' : 'Nouvel Utilisateur'}
        </button>
      </div>

      {/* Formulaire (Create / Update) */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 animate-fade-in">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            {isEditing ? 'Modifier l\'utilisateur' : 'Ajouter un utilisateur'}
          </h2>
          <form onSubmit={isEditing ? updateUser : addUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                name="name"
                value={currentUser.name}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rôle</label>
              <select
                name="role"
                value={currentUser.role}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Editor">Editor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select
                name="status"
                value={currentUser.status}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
              >
                <FaCheck />
                {isEditing ? 'Mettre à jour' : 'Enregistrer'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table (Read) */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => editRow(user)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4 transition"
                        title="Modifier"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-600 hover:text-red-900 transition"
                        title="Supprimer"
                      >
                        <FaTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                    Aucun utilisateur trouvé. Commencez par en ajouter un !
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
