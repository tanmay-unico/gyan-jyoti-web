import React, { useState } from "react";
import Footer from "../sections/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <main>
      <section className="contact">
        <div className="container contact-grid">
          <div className="contact-left">
            <div className="contact-eyebrow">CONTACT US</div>
            <h1 className="contact-title">We'd love to hear from you</h1>
            <p className="contact-sub">Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
          </div>
          <aside className="contact-right">
            <h2 className="contact-right-title">Let's talk!</h2>
            <div className="contact-detail">
              <div className="label">Headoffice</div>
              <div className="value">Ghatsila, East Singhbhum, Jharkhand</div>
            </div>
            <div className="contact-detail">
              <div className="label">Phone Number</div>
              <a className="value" href="tel:8340371995">8340371995</a>
            </div>
            <div className="contact-socials" aria-label="Social links">
              <a href="https://www.facebook.com/groups/501615936284704/?ref=share&mibextid=NSMWBT" aria-label="Facebook" className="social" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://www.facebook.com/groups/501615936284704/?ref=share&mibextid=NSMWBT" aria-label="Twitter" className="social" target="_blank" rel="noopener noreferrer">t</a>
              <a href="https://www.facebook.com/groups/501615936284704/?ref=share&mibextid=NSMWBT" aria-label="LinkedIn" className="social" target="_blank" rel="noopener noreferrer">in</a>
            </div>
          </aside>
        </div>
      </section>
      
      <section className="contact-form-section">
        <div className="container">
          <div className="form-header">
            <h2 className="form-title">Send us a Message</h2>
            <p className="form-subtitle">We'll get back to you within 24 hours</p>
          </div>
          
          {submitStatus === 'success' && (
            <div className="form-success">
              <div className="success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="success-text">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row two">
              <div className="field">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <div className="field-line"></div>
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <div className="field-line"></div>
              </div>
            </div>
            
            <div className="form-row two">
              <div className="field">
                <label htmlFor="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  placeholder="What's this about?" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <div className="field-line"></div>
              </div>
              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div className="field-line"></div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="field">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="6" 
                  placeholder="Tell us how we can help you..." 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <div className="field-line"></div>
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="submit" 
                className={`btn primary form-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map">
            <iframe
              title="Gyan Jyoti Education Centre Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.771105723106!2d86.4730886!3d22.587662699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f61d0024901773%3A0x218ad8b24c58d874!2sGYAN%20JYOTI%20Education%20Centre!5e0!3m2!1sen!2sin!4v1757482721346!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ContactPage;


