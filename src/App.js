import React from "react";
import './App.css'
import Header from "./Component/header/header";
import Nav from "./Component/nav/nav";
import About from "./Component/about/about";
import Portfolio from "./Component/experience/Portfolio";
import Skill from "./Component/skills/skill";
import Contact from "./Component/contact/Contact";
import Footer from "./Component/footer/footer";
import video from "./assets/images/video-bg.mp4";
import ReactSwitch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";
import { createContext, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageSwitcher from "./Component/languageSwitcher/languageSwitcher";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme} className="App">
          <video autoPlay muted loop id="myVideo" src={video} alt="video" />

          <div id="one">
            <LanguageSwitcher />
            <div className={`switch ${theme === 'light' ? 'light' : 'dark'}`}>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} className="react-switch" onColor=""
                // handleDiameter={30}
                checkedIcon={
                  <div className="icon-container">
                    <FiSun className="icon" />
                  </div>
                } // Custom icon for checked state (day)
                uncheckedIcon={
                  <div className="icon-container">
                    <FiMoon className="icon" />
                  </div>
                }
              />

            </div>

            <Header />

            <Nav />
            <About />
            <Portfolio />
            <Skill />
            <Contact />
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
