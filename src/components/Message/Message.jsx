import React, { useState, useEffect } from 'react';
import './Message.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Currently unavailable');
    console.log('Form submitted:', formData);
  };

  return (
    <div className="page-container">
      <section className="content-section">
        <div className="message-section hidden">
          <h1 className="message-title">Message</h1>
          <div className="message-line"></div>
        </div>

        <div className="form-section hidden">
          <div className="form-container">
            <div className="gradient-border"></div>
            <div className="inner-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label style={{fontWeight: "bold"}} >Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{fontWeight: "bold"}}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{fontWeight: "bold"}}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-button" style={{fontWeight: "bold"}}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;