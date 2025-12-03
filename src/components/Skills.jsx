import React from 'react'
import { FaReact, FaNode, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaJava, FaBrain } from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiCsharp, SiFastapi, SiPytorch, SiFlutter, SiRubyonrails, SiSqlite } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'C#', icon: <SiCsharp />, level: 80 },
        { name: 'SQL', icon: <SiSqlite />, level: 85 },
      ]
    },
    {
      title: 'AI/ML & Frameworks',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch />, level: 85 },
        { name: 'Hugging Face', icon: <FaBrain />, level: 80 },
        { name: 'scikit-learn', icon: <FaPython />, level: 85 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 90 },
        { name: 'SQLAlchemy', icon: <FaPython />, level: 88 },
      ]
    },
    {
      title: 'Web & Mobile',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Ruby on Rails', icon: <SiRubyonrails />, level: 80 },
        { name: 'Flutter', icon: <SiFlutter />, level: 75 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
      ]
    },
    {
      title: 'Tools & Practices',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'CI/CD', icon: <FaGitAlt />, level: 85 },
        { name: 'SCRUM', icon: <FaGitAlt />, level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

