'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      company: 'JamboPay',
      position: 'Software Developer - Intern',
      period: '2023 May - 2023 August',
      location: 'Nairobi, KE',
      type: 'Internship',
      website: '#',
      description: 'During my internship period, I was tasked to learn Python, Django and Django REST Framework.',
      achievements: [
        'Learnt Python, Django and DRF',
        'Created multiple projects with Django',
        'Implemented API design and development using DRF',
        
      ],
      technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Django', 'DRF', 'SQLite']
    },
    {
      company: 'JamboPay',
      position: 'Full-Stack Developer',
      period: '2024 - 2025',
      location: 'Nairobi, KE',
      type: 'Full-time',
      website: 'https://epayments.tharakanithi.go.ke/',
      description: 'Developed both frontend and backend systems for a multi-tenant County Management System . ',
      achievements: [
        'Wrote test cases for the legacy code that was existing in the codebase',
        'Built data intensive API endpoints for the system',
        'Database Modelling and Normalization: Collaborated with a senior developer to design and normalize a new modules database structure, presenting the final architecture to the CTO',
        'Debugging: Fixed bugs in the County System to ensure proper functionality and meet user expectations.',
        'End-to-End Testing: Participated in testing E-Wallet and USSD services with senior and Android developers from a user perspective',
        'UI Development (Frontend): Enhanced UI features with a UI/UX designer to improve user experience and adapt to agile changes.'
      ],
      technologies: ['HTML', 'Python', 'Django', 'Redis', 'DRF', 'Javascript','PostgreSQL']
    },
    {
      company: 'GIRWA Foundation',
      position: 'Backend Developer',
      period: '2025 - 2025',
      location: 'Remote',
      type: 'Part-time(Volunteer)',
      website: '#',
      description: 'Specialized in creating high-performance web applications for GIRWA Foundation which is dedicated to empowering communities through sustainable development initiatives in education, healthcare, agriculture, and environmental conservation.',
      achievements: [
        'Upgraded the legacy code for the system',
        'Improved website authentication feature to using JWT Tokens.',
        'Rate Limiting of requests per IP Address.',
        'Developing the core authentication features for the MVP.'
        
      ],
      technologies: ['Python', 'Django',  'DRF', 'Docker', 'Redis', 'Jira','PostgreSQL', 'JWT']
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      period: '2021 - Present',
      location: 'Various',
      type: 'Contract',
      website: '#',
      description: 'Provided web development services to small businesses and startups. Focused on creating modern, responsive websites and basic web applications.',
      achievements: [
        'Built 10+ websites for local businesses',
        'Developed e-commerce solutions for retail clients',
        'Provided ongoing maintenance and support services',
        'Established long-term client relationships'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'PostgreSQL']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey building innovative web solutions and leading development teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Experience card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-500 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {experience.position}
                          </h3>
                          {experience.website && (
                            <a
                              href={experience.website}
                              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <h4 className="text-lg text-emerald-400 mb-2">{experience.company}</h4>
                      </div>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 self-start sm:self-center">
                        {experience.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-white text-sm mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 leading-relaxed">
              With 2+ years of experience building web applications, I'm passionate about creating 
              innovative solutions and leading development teams to deliver exceptional user experiences.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}