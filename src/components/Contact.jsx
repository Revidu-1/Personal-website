import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // EmailJS configuration
    const serviceId = 'service_4shhz3d'
    const contactTemplateId = 'template_sq0a8d3' // Template for email to you (revidu33@gmail.com)
    const confirmationTemplateId = 'template_lvhimwf' // Confirmation template to sender
    const publicKey = '9uTaWZqkbIIDWSINM'

    // Send email to you (revidu33@gmail.com) with their message
    emailjs.send(serviceId, contactTemplateId, {
      to_email: 'revidu33@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    }, publicKey)
      .then(() => {
        // Send confirmation email back to the sender
        return emailjs.send(serviceId, confirmationTemplateId, {
          to_email: formData.email,
          to_name: formData.name,
          from_name: 'Revidu Liyanage',
          from_email: 'revidu33@gmail.com',
          reply_to: 'revidu33@gmail.com'
        }, publicKey)
          .catch((confirmationError) => {
            // Log confirmation error but don't fail the whole process
            console.error('Confirmation email error:', confirmationError)
            console.error('Confirmation error details:', confirmationError.text || confirmationError.message)
          })
      })
      .then(() => {
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        console.error('Error details:', error.text || error.message)
        alert(`Sorry, there was an error sending your message: ${error.text || error.message || 'Unknown error'}. Please check the console for details or email me directly at revidu33@gmail.com`)
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>revidu33@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>07894176915</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Sheffield, UK</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact


