import React from "react";
import "./VehiclesPage.css";
const VehiclesPage = () => {
  const cars = [
    {
      name: "Porsche 718 cayman gt4 rs",
      image:
        "https://ibb.co/bBtXQmG",

      carPrice: " Price: Rs. 1.5cr - 3cr",
      mileage: " Mileage: 20.01 to 28.51 kmpl",
      keyFeatures:
        " Keyfeatures: Side and curtain airbags all 3-point seat belts Auto-dimming inside rearview mirror Electronic Stability Program",
      Transmission: " Transmission: Manual & Automatic",
    },

    
  ];







  return (

    <div className="main">
      <div className="vehicles">
        {cars.map((car, index) => (
          <div className="card">
            <div className="car-image">
              <img src="https://i.postimg.cc/FmjyFJ1n/718porsche.png" alt="" />
            </div>
            <div className="container-1">
              <div className="car-name">{car.name}</div>
              <button className="specs-btn">Specs</button>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default VehiclesPage;
