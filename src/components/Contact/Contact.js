import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p>For inquiries, feel free to reach out: jfrgm1986@gmail.com | +17874874262</p>
        </section>
    );
};

export default Contact;