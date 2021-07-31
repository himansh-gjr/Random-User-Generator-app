import React from "react";
import { Link } from "react-router-dom";

const genders = ["female", "male"];

function Genders() {
  return (
    <div>
      <h1> Genders</h1>
      {genders.map((gen, idx) => (
        <div key={idx} className="nat-divs">
          <h1>
            <Link to={`/gender/${gen}`}>{gen}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Genders;
