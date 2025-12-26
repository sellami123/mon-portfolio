import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation simple d'authentification
        // Dans un vrai projet, cela appellerait une API
        if (formData.username === 'nada' && formData.password === 'nada123') {
            onLogin({ username: 'nada', role: 'admin' });
            navigate('/admin');
        } else {
            setError('Identifiants incorrects (Essayez: nada / nada123)');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center px-4">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-md w-full relative z-10">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl mb-4">
                        <span className="text-white font-bold text-3xl">21C</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">Connexion Admin</h2>
                    <p className="text-blue-200">Accédez à votre tableau de bord</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">
                                Nom d'utilisateur
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaUser className="text-blue-300" />
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="block w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition backdrop-blur-sm"
                                    placeholder="nada"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaLock className="text-blue-300" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition backdrop-blur-sm"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/50 text-red-100 p-4 rounded-xl text-sm text-center animate-shake">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Se connecter
                        </button>
                    </form>

                    {/* Back to site link */}
                    <div className="mt-6 text-center">
                        <a
                            href="/"
                            className="text-blue-200 hover:text-white text-sm transition"
                        >
                            ← Retour au site
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-blue-300 text-sm mt-6">
                    © 2025 21C Digital - Tous droits réservés
                </p>
            </div>
        </div>
    );
};

export default Login;
