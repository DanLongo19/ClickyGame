import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.addPoint(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
</div></div>
  );
}

export default CharacterCard;


// </div>
// <span onClick={() => props.addPoint(props.id)} className="point">
//   X
// </span>
// </div>