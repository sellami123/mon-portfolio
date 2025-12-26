import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaDownload, FaPaperclip } from 'react-icons/fa';

const Experience = () => {
  const user = {
    name: "Nada Sellami",
    title: "Développeuse Mobile & Web",
    email: "sellaminada82@gmail.com",
    phone: "26 320 702",
    location: "sfax",
    experience: "2+ ans",
    availability: "Disponible pour projets",
    bio: "Développeuse passionnée spécialisée dans la création d'applications mobiles avec Flutter et de solutions web modernes. J'aime transformer des idées complexes en expériences utilisateurs fluides.",

    experiences: [
      {
        id: 1,
        period: "2024 - Présent",
        role: "Freelance Full-Stack Developer",
        company: "Indépendant",
        location: "Sfax, Tunisie",
        type: "Freelance",
        description: "Développement d'applications web sur mesure pour des clients locaux et internationaux.",
        achievements: [
          "Développement d'un site e-commerce complet avec React & Node.js",
          "Maintenance et optimisation de plusieurs sites WordPress",
          "Intégration d'API de paiement et de gestion de contenu"
        ],
        technologies: ["Flutter", "Dart", "React", "Node.js", "Firebase"]
      },
    ],

    certifications: [
      {
        name: "Développement Web Full-Stack",
        organization: "GOMYCODE",
        date: "2024",
        file: "certificat_fullstack.pdf",
        size: "2.4mb",
        url: "#"
      },
      {
        name: "React.js Essentials",
        organization: "Udemy",
        date: "2023",
        file: "react_certif.pdf",
        size: "1.1mb",
        url: "#"
      }
    ]
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mon Parcours Professionnel</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            {user.experience} d'expérience dans le développement web et la création de solutions digitales innovantes.
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">{user.title}</p>
              <p className="text-gray-600 leading-relaxed">{user.bio}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600">📧</span>
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-blue-600">📱</span>
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaBriefcase className="text-blue-600" />
                <span className="font-semibold text-green-600">{user.availability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Experience */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {user.experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Left Side (or Right on odd items) */}
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                  {index % 2 === 0 && (
                    <div className="hidden md:block">
                      <div className="inline-block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2 justify-end">
                          <FaCalendar />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-sm text-gray-500">{exp.type}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Right Side (or Left on odd items) */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">

                    {/* Mobile Period */}
                    <div className="md:hidden flex items-center gap-2 text-blue-600 font-semibold mb-4">
                      <FaCalendar />
                      <span>{exp.period}</span>
                      <span className="ml-auto text-sm bg-blue-100 px-3 py-1 rounded-full">{exp.type}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <FaBriefcase className="text-blue-600" />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Réalisations clés</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side Period (odd items) */}
                {index % 2 !== 0 && (
                  <div className="hidden md:block">
                    <div className="inline-block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <FaCalendar />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-sm text-gray-500">{exp.type}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
};

export default Experience;
