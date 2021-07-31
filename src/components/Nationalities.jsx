import React from "react";
import { Link } from "react-router-dom";

const nationalitiesArr = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IR",
  "NO",
  "NL",
  "NZ",
  "TR",
  "US",
];

function Nationalities(props) {
  return (
    <div>
      <h1>Nationalities</h1>

      {nationalitiesArr.map((nat, idx) => (
        <div className="nat-divs" key={idx}>
          <h4>
            <Link to={`/nationalities/${nat}`}> {nat} </Link>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default Nationalities;
