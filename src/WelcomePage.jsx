import React from "react";
import "./WelcomePage.css"; 

export default function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Chatify!</h1>
      <p className="welcome-subtitle">Connect with friends instantly</p>
      <button className="welcome-button">Get Started</button>
    </div>
  );
}
