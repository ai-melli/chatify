import React, { useEffect, useState } from "react";
import "./SplashScreen.css"; 

const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 3000);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="splash-container">
      <img src="/logo1.webp" alt="Chat App Logo" className="logo" />
      <h1 className="title">Chatify</h1>
      <p className="subtitle">Connecting You Seamlessly</p>
    </div>
  );
};

export default SplashScreen;
