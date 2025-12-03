import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Respiratory Sound Classification',
      description: 'Dissertation project: Deep-learning pipeline for respiratory sound classification achieving performance comparable to state-of-the-art models. Built with PyTorch and advanced ML techniques.',
      technologies: ['Python', 'PyTorch', 'Deep Learning', 'ML Pipeline'],
      image: 'https://via.placeholder.com/400x250?text=Respiratory+Sound+Classification',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 2,
      title: 'Production Backend API System',
      description: 'Built production-grade backend APIs with JWT authentication, modular database/service layers using SQLAlchemy, and middleware for logging, error handling, and request tracing.',
      technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'JWT', 'Middleware'],
      image: 'https://via.placeholder.com/400x250?text=Backend+API+System',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 3,
      title: 'Traffic Simulation Platform',
      description: 'Team project: Reengineered a Python-based traffic simulation platform with improved architecture and performance optimizations.',
      technologies: ['Python', 'Software Architecture', 'Simulation'],
      image: 'https://via.placeholder.com/400x250?text=Traffic+Simulation',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 4,
      title: 'Mobile MVP - Workflow Optimization',
      description: 'Delivered a full MVP as Mobile Software Engineering Intern, improving client workflows by 40%. Contributed to SCRUM practices and agile development.',
      technologies: ['Flutter', 'Mobile Development', 'SCRUM', 'MVP'],
      image: 'https://via.placeholder.com/400x250?text=Mobile+Workflow+App',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 5,
      title: 'Ruby on Rails Web Applications',
      description: 'Built multiple web applications using Ruby on Rails, implementing RESTful APIs and modern web development practices.',
      technologies: ['Ruby on Rails', 'Web Development', 'RESTful APIs'],
      image: 'https://via.placeholder.com/400x250?text=Rails+Web+App',
      github: 'https://github.com',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

