import React from "react";
import { useParams } from "react-router-dom";
const EditCar = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit {id}</h1>
    </div>
  );
};

export default EditCar;
