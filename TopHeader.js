import React from "react";
import "./customstyling.css";
import logo from "./PSLogo.jpeg";

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="topBar">
        <img className="imageStyling" src={logo} alt="Logo" />

        <a href="url" className="alinkStyles hightlightText">
          {" "}
          Publicis
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          new
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          past
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          comments
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          ask
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          show
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          jobs
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles">
          {" "}
          submit
        </a>
        <span className="verticalBar"></span>
        <a href="url" className="alinkStyles moveRight">
          {" "}
          login
        </a>
      </div>
    );
  }
}

export { TopHeader };
