import React from 'react';
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaCheckCircle, FaAward, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const user = {
    name: "Nada Sellami",
    title: "Développeuse Full-Stack & Entrepreneuse",
    tagline: "Créatrice de solutions digitales innovantes",
    mainDescription: "Passionnée par le développement web et les nouvelles technologies. Je transforme les idées complexes en solutions digitales simples, performantes et adaptées aux besoins de chaque client.",
    mission: "Ma mission est d'aider les entreprises à réussir leur transformation digitale en créant des outils web modernes, intuitifs et rentables.",

    image: "./vite.svg",
    stats: {
      projects: 5,
      clients: 0,
      satisfaction: 100,
      yearsExp: 2
    },

    features: [
      {
        icon: <FaCode className="text-3xl" />,
        title: "Code de qualité",
        description: "J'écris du code propre, maintenable et optimisé selon les meilleures pratiques de l'industrie. Chaque ligne est pensée pour la performance et la scalabilité."
      },
      {
        icon: <FaRocket className="text-3xl" />,
        title: "Livraison rapide",
        description: "Méthodologie agile et sprints efficaces pour des livraisons dans les délais. Je m'adapte aux urgences tout en maintenant une qualité irréprochable."
      },
      {
        icon: <FaUsers className="text-3xl" />,
        title: "Accompagnement complet",
        description: "De la conception à la maintenance, je reste à vos côtés. Formation incluse pour que vous puissiez gérer votre solution en toute autonomie."
      },
      {
        icon: <FaLightbulb className="text-3xl" />,
        title: "Solutions innovantes",
        description: "Je veille constamment aux dernières tendances tech pour proposer des solutions modernes et compétitives qui vous démarquent."
      }
    ],

    expertise: [
      "Développement Mobile cross-platform avec Flutter & Dart",
      "Développement d'applications web modernes avec React et Node.js",
      "Création de sites vitrines et e-commerce responsive",
      "Développement Backend avec Express et MongoDB",
      "Intégration de maquettes (Figma vers Code)",
      "Optimisation SEO et performance web",
      "Travail collaboratif avec Git & GitHub"
    ],

    values: [
      {
        title: "Transparence",
        description: "Communication claire et honnête à chaque étape du projet"
      },
      {
        title: "Excellence",
        description: "Engagement pour la qualité et le dépassement des attentes"
      },
      {
        title: "Innovation",
        description: "Veille technologique constante pour des solutions d'avant-garde"
      }
    ],

    education: [
      {
        icon: <FaGraduationCap />,
        degree: "Licence en Informatique",
        school: "En cours",
        year: "Présent"
      }
    ]
  };

  return (
    <section className="bg-white">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-blue-600">{user.tagline}</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              À propos de moi
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {user.mainDescription}
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
                <div className="text-4xl font-bold text-blue-600 mb-2">{user.stats.projects}+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
                <div className="text-4xl font-bold text-blue-600 mb-2">{user.stats.clients}+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
                <div className="text-4xl font-bold text-blue-600 mb-2">{user.stats.satisfaction}%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
                <div className="text-4xl font-bold text-blue-600 mb-2">{user.stats.yearsExp}+</div>
                <div className="text-sm text-gray-600">Ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

            {/* Left Content */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Pourquoi me choisir ?</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Un partenaire digital de confiance
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  {user.mission}
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {user.features.map((feature, index) => (
                    <div key={index} className="relative pl-16 hover:bg-gray-50 p-4 rounded-lg transition">
                      <dt className="inline font-semibold text-gray-900">
                        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                          {feature.icon}
                        </div>
                        {feature.title}
                      </dt>
                      <dd className="inline"> {feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <img
                src={user.image}
                alt="Workspace"
                className="w-full max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Mon Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compétences & Spécialisations
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4">
              {user.expertise.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Mes Valeurs</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ce qui guide mon travail
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              {user.values.map((value, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-bl-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-100">Formation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Parcours Académique
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {user.education.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-2xl">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-100 mb-1">{edu.school}</p>
                    <p className="text-blue-200 text-sm">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discutons ensemble de vos besoins et trouvons la solution digitale qui vous convient.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                Me contacter
              </button>
              <button className="rounded-lg border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition">
                Voir mes projets
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
