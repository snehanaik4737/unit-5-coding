import React from "react";

export const RestaurantDetails = ({
  src,
  name: title,
  cost,
  rating,
  votes,
  reviews,
  payment_methods,
  cuisine: tags,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        margin: "0.5rem",
        border: "1px solid gray",
        padding: "1rem",
      }}
    >
      <div>
        <img style={{ width: "150px" }} src={src} alt={title}></img>
      </div>
      <div>
        <div>{title}</div>
        <div>{tags?.join(",")}</div>
        <div>Cost ${cost} for one </div>
        <div>accepts {JSON.stringify(payment_methods)}</div>
      </div>

      <div>
        <div>Rating : {rating}</div>
        <div>Votes : {votes}</div>
        <div>Reviews : {reviews}</div>
      </div>
    </div>
  );
};
