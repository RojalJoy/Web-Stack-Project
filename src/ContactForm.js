import React, { useState } from 'react';
import './ContactForm.module.css'; 
import 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAhs0g1RMoV3mBy9BpYMn-X3lq2dCOFT2M",
  authDomain: "video-streaming-platform-wsd.firebaseapp.com",
  projectId: "video-streaming-platform-wsd",
  storageBucket: "video-streaming-platform-wsd.appspot.com",
  messagingSenderId: "5217413066",
  appId: "1:5217413066:web:6948f726c5819edbf41133"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Push data to Firebase
    database.ref("messages").push({
      name: name,
      email: email,
      message: message,
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');

    alert("Your message has been sent!");
  };

  return (
    <div className="container">
      <div className="text">Contact us Form</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="underline"></div>
            <label htmlFor="name">Name:</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="underline"></div>
            <label htmlFor="email">Email:</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data textarea">
            <textarea
              id="message"
              rows="8"
              cols="80"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="message">Message:</label>
            <br />
          </div>
        </div>

        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
