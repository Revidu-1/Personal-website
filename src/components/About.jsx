import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science graduate from the University of Sheffield with a passion for building innovative software solutions 
              that solve real-world problems. My journey in tech spans from academic research to production-grade systems, combining 
              theoretical knowledge with practical engineering skills.
            </p>
            <p>
              Currently working as an Associate Software Engineer – AI, I specialize in building robust backend APIs and implementing 
              scalable architectures. I've designed modular systems using SQLAlchemy, implemented JWT authentication, and developed 
              comprehensive middleware for logging, error handling, and request tracing. My work focuses on creating reliable, 
              maintainable code that powers real-world applications.
            </p>
            <p>
              My academic achievements include a distinction in my dissertation, where I developed a deep-learning pipeline for 
              respiratory sound classification that matched state-of-the-art performance. This project showcased my ability to bridge 
              research and practical application, combining PyTorch, advanced ML techniques, and rigorous evaluation methodologies.
            </p>
            <p>
              Beyond coding, I've led as a computer science mentor, helping students navigate their tech journeys, and served as a 
              society secretary, organizing events and building community. I'm continuously learning, currently completing an AI Bootcamp 
              focused on ML fundamentals and production deployment, always staying at the forefront of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


