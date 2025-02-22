import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import WelcomePage from "./WelcomePage";

export default function App() {
  const [showMainApp, setShowMainApp] = useState(false);

  return (
    <>
      {!showMainApp ? (
        <SplashScreen onFinish={() => setShowMainApp(true)} />
      ) : (
        <WelcomePage />
      )}
    </>
  );
}
