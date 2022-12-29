import React from "react";
import "./App.css";
import ImageArea from "./components/Image.js";
import NameTitleWebSite from "./components/NameTitleWebsite.js";
import Buttons from "./components/Buttons.js";
import AboutInterest from "./components/AboutInterest.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="CenterAlign">
      <ImageArea />
      <NameTitleWebSite />
      <Buttons />
      <AboutInterest />
      <Footer />
    </div>
  );
}

export default App;
