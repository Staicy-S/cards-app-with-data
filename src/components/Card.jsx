import "./Card.css";
import { useState } from "react";

export function Card(props) {
  const [selectFavorite, setSelectFavorite] = useState(false);

  function handleFavoriteButtonClick() {
    if (selectFavorite === false) {
      setSelectFavorite(true);
    } else {
      setSelectFavorite(false);
    }
  }

  const user = props.user;
  return (
    <div className="card">
      <button className="favorite" onClick={handleFavoriteButtonClick}>
        <img
          className="fav-icon"
          src={selectFavorite ? "favorite_FILL1.png" : "favorite_FILL0.png"}
          alt={selectFavorite ? "favorite person" : "not a favorite person"}
        />
      </button>
      <img className="profile-picture" src={user.picture.medium} width="70%" />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>{user.location.country}</p>
      <p>{user.dob.age} years</p>
    </div>
  );
}
