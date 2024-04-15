import React from "react";
import "./VehiclesPage.css";

const VehiclesPage = () => {
  const cars = [
    {
      name: "Maruti Fornex",
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",

      carPrice: "Rs. 7.51 Lakh - 13.03 Lakh",
      mileage: "20.01 to 28.51 kmpl",
      engine: "",
      keyFeatures:
        "Side and curtain airbags all 3-point seat belts Auto-dimming inside rearview mirror Electronic Stability Program",
      Transmission: "Manual & Automatic",
    },
    
    // {
    //     name:"",
    //     image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/39015/punch-exterior-right-front-three-quarter-54.jpeg?isig=0&q=80",

    // }
  ];

  return (
    <div>
      {cars.map((car, index) => {
        return ( <div key={index} className="card">
        <div className="">{car.name}</div>
      </div>)
       
      })}
    </div>
  );
};

export default VehiclesPage;
