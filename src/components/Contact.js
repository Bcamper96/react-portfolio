import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageError, setMessageError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length > 0) {
      setNameError(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validateEmail(event.target.value)) {
      setEmailError(false);
      setEmailErrorMessage('');
    } else {
      setEmailError(true);
      setEmailErrorMessage('Your email is invalid');
    }
  };

  const handleMsgChange = (event) => {
    setMessage(event.target.value);
    if (event.target.value.length > 0) {
      setMessageError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length === 0) {
      setNameError(true);
    }

    if (email.length === 0) {
      setEmailError(true);
      setEmailErrorMessage('A message is required');
    }

    if (message.length === 0) {
      setMessageError(true);
    }

    if (name.length > 0 && email.length > 0 && message.length > 0 && validateEmail(email)) {
      alert(`Thank you for your message, ${name}!`);
      setName('');
      setEmail('');
      setMessage('');
      setNameError(false);
      setEmailError(false);
      setEmailErrorMessage('');
      setMessageError(false);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
          {nameError && <p className="error-message">A name is required</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} />
          {emailError && <p className="error-message">{emailErrorMessage}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={handleMsgChange} />
          {messageError && <p className="error-message">A message is required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

