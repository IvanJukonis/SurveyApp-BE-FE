import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./style.css";

//Container / Branch / View Pattern
const LandingPage = () => (
  <div>
    
    <CssBaseline />
    <div className="main">
      <span className="text1 container d-flex justify-content-center mt-5 display-1">Sistema Integral Analitico de Siniestros SurveyApp</span>
    </div>
  </div>
);

class Menu extends Component {
  render() {
    return <LandingPage />;
  }
}

export default Menu;
