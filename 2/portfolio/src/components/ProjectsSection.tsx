'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import epayments from '../assets/epayments.png'
import mfarm from '../assets/m-farm.png'
import ktickets from '../assets/k-tickets.png'
import weki from '../assets/weki.png'
import fuel from '../assets/Screenshot 2025-08-09 at 9.22.24 PM.png'

export function ProjectsSection() {
  const projects = [
    {
      title: 'E-Revenue Management System',
      description: 'A full-stack County Revenue Management System solution built with Django, JavaScript, and payments integration. Features include user authentication, revenue stream management, and real-time reports on dashboard.',
      image: epayments,
      technologies: ['HTML','Javascript', 'Django','DRF', 'Redis', 'PostgreSQL'],
      github: '#',
      live: 'https://epayments.tharakanithi.go.ke/',
      featured: true
    },
    {
      title: 'M-FARM',
      description: 'A web application that will provide access to e-markets from farmers across the country. Its a personal project that i used to learn Microservices architecture.',
      image: mfarm,
      technologies: ['React', 'Django', 'DRF', 'PostgreSQL','Redis','AWS','EKS','Docker','Terraform'],
      github: 'https://github.com/JohnMartin-19/SAD-microservice-',
      live: '#',
      featured: true
    },
    {
      title: 'K-Tickets',
      description: 'A monolithic Django E-Ticketing platform that allows organizations to register and create events, clients can purchase the event tickets and has some payment gateways such as mpesa and paypal.Built using Django, DRF,PostgreSQL, HTML&CSS then hosted it on an AWS ec2 instance.',
      image: ktickets,
      technologies: ['Django', 'Javascript', 'M-PESA'],
      github: 'https://github.com/JohnMartin-19/dj-tickets',
      live: '#',
      featured: false
    },
    {
      title: 'Weki Travels',
      description: 'A travel agency website for Weki Travels.',
      image:weki ,
      technologies: ['React', 'TypeScript', 'Tailwind'],
      github: '#',
      live: 'wekitravels.com',
      featured: false
    },
    {
      title: 'Fuel Route Optimizer',
      description: 'A minimalistic interface with Open Street Map, for drivers across the USA to calculate the most optimal route and the most efficient fuel station along their travel route, and multi-language support.',
      image: fuel,
      technologies: ['React', 'Open Street Map API', 'Django', 'DRF'],
      github: 'https://github.com/JohnMartin-19/spotter.ai.',
      live: '#',
      featured: false
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A responsive portfolio website with smooth animations, dark theme, and optimized performance built with modern web technologies.',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    //   technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
          ><a href="https://github.com/JohnMartin-19/">
            View All Projects
          </a>
            
          </Button>
        </motion.div>
      </div>
    </section>
  )
}