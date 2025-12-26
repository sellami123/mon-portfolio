import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "GymFuel - Application Fitness",
            description: "Application mobile complète de fitness et nutrition développée avec Flutter. Suivi des entraînements, planification des repas, et gestion de profil utilisateur avec base de données locale Hive et fonctionnalités natives (caméra).",
            tags: ["Flutter", "Dart", "Hive", "Mobile Dev"],
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Image de fitness
            github: "https://github.com/nadasellami/GymFuel", // Lien GitHub hypothétique ou vide
            demo: "#"
        }
    ];

    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Mon Portfolio</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Projets Récents
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Découvrez une sélection de mes travaux les plus significatifs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                            <div className="h-48 overflow-hidden relative group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-3 bg-white rounded-full text-gray-900 hover:text-blue-600 transition">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={project.demo} className="p-3 bg-white rounded-full text-gray-900 hover:text-blue-600 transition">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.demo}
                                    className="w-full block text-center py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
                                >
                                    Voir le détails
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
