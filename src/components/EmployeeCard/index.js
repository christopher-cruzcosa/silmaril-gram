import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={(props.race === "Maiar") ? "/silmaril-gram/maiar.jpg": "/silmaril-gram/elves.jpg"} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Race:</strong> {props.race}
          </li>
          <li>
            <strong>WikiURL:</strong> <a href={props.wikiUrl}>{props.wikiUrl}</a>
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default EmployeeCard;
