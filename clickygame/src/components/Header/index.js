import React from "react";
import "./style.css";

// function Header(props) {
//   return <h1 className="header">{props.children}</h1>;
// }

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
