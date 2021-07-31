import React, { Fragment, useEffect, useState } from "react";

function RandomUserGender({ match }) {
  const [randomUsr, setRandomUsr] = useState([]);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?gender=${match.params.gen}`
    );
    const ranUser = await res.json();

    setRandomUsr(ranUser.results);
  };

  return (
    <div>
      <h1>Random user of Gender {match.params.gen}</h1>
      {randomUsr.map((user, idx) => (
        <Fragment key={idx}>
          <h5>
            {user.name.title + " " + user.name.first + " " + user.name.last}
          </h5>
          <h5> Nat:- {user.nat} </h5>
          <img src={user.picture.large} alt="" />
        </Fragment>
      ))}
    </div>
  );
}

export default RandomUserGender;
