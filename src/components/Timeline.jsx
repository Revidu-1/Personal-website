import React from 'react'
import './Timeline.css'

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      year: '2024 - Present',
      title: 'Associate Software Engineer – AI',
      company: 'Current Role',
      description: 'Building production-grade backend APIs, implementing JWT authentication, designing modular database/service layers using SQLAlchemy, and introducing middleware for logging, error handling, and request tracing.',
      type: 'work'
    },
    {
      id: 2,
      year: '2024',
      title: 'AI Bootcamp',
      company: 'In Progress',
      description: 'Completing an AI Bootcamp focused on ML fundamentals and production deployment.',
      type: 'education'
    },
    {
      id: 3,
      year: '2023',
      title: 'Mobile Software Engineering Intern',
      company: 'Internship',
      description: 'Delivered a full MVP that improved client workflows by 40%. Contributed to SCRUM practices and agile development.',
      type: 'work'
    },
    {
      id: 4,
      year: '2020 - 2024',
      title: 'BSc (Hons) Computer Science',
      company: 'University of Sheffield',
      description: 'Graduated with 2:1 classification. Achieved Distinction in dissertation: Deep-learning pipeline for respiratory sound classification matching state-of-the-art performance.',
      type: 'education'
    },
    {
      id: 5,
      year: '2022 - 2024',
      title: 'Computer Science Mentor',
      company: 'Leadership Role',
      description: 'Led as a computer science mentor, helping students navigate their tech journeys and providing guidance on programming and career development.',
      type: 'work'
    }
  ]

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline-container">
          {timelineItems.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline


