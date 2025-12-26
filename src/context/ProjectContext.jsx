import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('useProjects must be used within ProjectProvider');
    }
    return context;
};

export const ProjectProvider = ({ children }) => {
    const initialProjects = [
        {
            id: 1,
            title: "GymFuel - Application Fitness",
            description: "Application mobile complète de fitness et nutrition développée avec Flutter. Suivi des entraînements, planification des repas, et gestion de profil utilisateur avec base de données locale Hive et fonctionnalités natives (caméra).",
            tags: ["Flutter", "Dart", "Hive", "Mobile Dev"],
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            github: "https://github.com/nadasellami/GymFuel",
            demo: "#"
        },
        {
            id: 2,
            title: "Système de Gestion Scolaire - Laravel",
            description: "Application web complète de gestion scolaire développée avec Laravel. Gestion des classes, des étudiants, calcul automatique des moyennes, suivi des notes et génération de rapports. Interface admin intuitive et système d'authentification sécurisé.",
            tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            github: "https://github.com/nadasellami/gestion-scolaire",
            demo: "#"
        }
    ];

    // Load projects from localStorage or use initial projects
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('projects');
        return saved ? JSON.parse(saved) : initialProjects;
    });

    // Save to localStorage whenever projects change
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = (project) => {
        const newProject = {
            ...project,
            id: Date.now(), // Simple ID generation
            tags: typeof project.tags === 'string' ? project.tags.split(',').map(t => t.trim()) : project.tags
        };
        setProjects([...projects, newProject]);
    };

    const updateProject = (id, updatedProject) => {
        setProjects(projects.map(p =>
            p.id === id ? {
                ...updatedProject,
                id,
                tags: typeof updatedProject.tags === 'string' ? updatedProject.tags.split(',').map(t => t.trim()) : updatedProject.tags
            } : p
        ));
    };

    const deleteProject = (id) => {
        setProjects(projects.filter(p => p.id !== id));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
};
