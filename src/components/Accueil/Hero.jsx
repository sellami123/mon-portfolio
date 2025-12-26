import React from 'react'
import { Link } from 'react-router-dom';
import { FaRocket, FaPlay, FaGithub, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
  const user = {
    name: "Nada Sellami",
    title: "Développeuse Mobile & Web Student",
    tagline: "Transformez vos idées en réalité digitale",
    description: "Développeuse passionnée par la création d'applications mobiles innovantes avec Flutter et de solutions web modernes. Basée en Tunisie.",
    avatar: "./vite.svg",
    stats: {
      projects: 1,
      clients: 0,
      support: "24/7"
    },
    socials: {
      github: "https://github.com/nadasellami",
      linkedin: "https://linkedin.com/in/nadasellami"
    },
    email: "sellaminada82@gmail.com",
    location: "Sfax, Tunisie"
  };


  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🚀 {user.location} • Disponible pour projets
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Bonjour, je suis
              <span className="block text-yellow-300">{user.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-100">
              {user.title}
            </h2>

            <p className="text-xl text-blue-100 max-w-xl">
              {user.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 shadow-lg">
                <FaRocket />
                Voir mes projets
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                <FaPlay />
                Me contacter
              </Link>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <a
                href={user.socials.github}
                className="bg-white/90 p-3 rounded-lg hover:bg-white/60 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={user.socials.linkedin}
                className="bg-white/90 p-3 rounded-lg hover:bg-white/60 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold">{user.stats.projects}+</p>
                <p className="text-blue-200 text-sm">Projets réalisés</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{user.stats.clients}%</p>
                <p className="text-blue-200 text-sm">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{user.stats.support}</p>
                <p className="text-blue-200 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <img
              src={user.avatar}
              alt={user.name}
              className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 w-full"
            />
          </div>
        </div>
      </div>
    </section>


  )
}

export default Hero;