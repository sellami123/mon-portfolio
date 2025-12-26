// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ProjectProvider } from './context/ProjectContext';

// Layouts
import Layout from './Pages/Layout';
import AdminLayout from './components/Admin/AdminLayout.jsx';

// Composants Publics
import Hero from './components/Accueil/Hero';
import About from './components/Accueil/About';
import Experience from './components/Accueil/Experience';
import Projects from './components/Accueil/Projects';
import ContactForm from './components/Formulaire/FormulaireG6';

// Composants Admin
import AdminDashboard from './components/Admin/Dashboard';
import AdminUsers from './components/Admin/Users';
import AdminAnalytics from './components/Admin/Statistics';
import AdminSettings from './components/Admin/Settings';
import Login from './components/Admin/Login';

// Protection
import ProtectedRoute from './components/Admin/ProtectedRoute';

// 404
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
    role: null
  });

  const handleLogin = (userData) => {
    setUser({
      isAuthenticated: true,
      role: userData.role
    });
  };

  const handleLogout = () => {
    setUser({
      isAuthenticated: false,
      role: null
    });
  };

  return (
    <ProjectProvider>
      <Routes>
        {/* Routes Publiques avec Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>

        {/* Route Login */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Routes Admin Protégées */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={user.isAuthenticated && user.role === 'admin'}
              redirectPath="/login"
            >
              <AdminLayout onLogout={handleLogout} />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProjectProvider>
  );
}

export default App;
