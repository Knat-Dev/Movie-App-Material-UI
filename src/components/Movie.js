import React from "react";

export default function Movie({ name, price }) {
  const movieStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  };

  return (
    <div style={movieStyle}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
