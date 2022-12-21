import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../services/axiosInstance";
const Cars = () => {
  const [cars, setCars] = useState([]);
  const loadData = () => {
    // let config = {
    //   headers: {},
    // };
    // config.headers["x-auth-token"] = localStorage.getItem("token");
    axiosInstance
      .get("/api/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(loadData, []);
  return (
    <div>
      {/* <button onClick={loadData}>Load Data</button> */}
      <h2>Awesome Cars</h2>
      <Link to="/cars/create">Create New Car</Link>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Variant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.variant}</td>
              <td>
                <Link to={"/cars/" + car._id}>Edit</Link>
                <a>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cars;
