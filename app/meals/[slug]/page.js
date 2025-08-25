import React from "react";

const MealDetails = (props) => {
  return (
    <div>
      <h1>{props.params.slug}</h1>
    </div>
  );
};

export default MealDetails;
