import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profileImage from '../assets/profile.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Revidu Liyanage</span>
          </h1>
          <h2 className="hero-subtitle">Graduate Software Engineer & AI/ML Specialist</h2>
          <p className="hero-description">
            I create beautiful and functional web experiences with modern technologies.
            Passionate about clean code, user experience, and continuous learning.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src={profileImage} alt="Revidu Liyanage" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


