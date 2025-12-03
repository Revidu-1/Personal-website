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
              As an Associate Software Engineer – AI, I've built production-grade backend APIs, implemented JWT authentication, 
              and designed modular database/service layers using SQLAlchemy. I've introduced middleware for logging, error handling, 
              and request tracing to enhance system reliability and observability.
            </p>
            <p>
              During my Mobile Software Engineering Internship, I delivered a full MVP that improved client workflows by 40% and 
              contributed to SCRUM practices. Academically, I excelled in my dissertation, creating a deep-learning pipeline for 
              respiratory sound classification that achieved performance comparable to state-of-the-art models.
            </p>
            <p>
              Beyond technical work, I've demonstrated leadership as a computer science mentor, content creator, and society secretary, 
              supporting students and managing events. I'm currently completing an AI Bootcamp focused on ML fundamentals and production deployment.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>2:1</h3>
                <p>Degree Classification</p>
              </div>
              <div className="stat-item">
                <h3>40%</h3>
                <p>Workflow Improvement</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Production Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


