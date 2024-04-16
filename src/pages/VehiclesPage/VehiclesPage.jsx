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
      keyFeatures:
        "Side and curtain airbags all 3-point seat belts Auto-dimming inside rearview mirror Electronic Stability Program",
      Transmission: "Manual & Automatic",
    },
    {
      name:"tata Punch",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/39015/punch-exterior-right-front-three-quarter-54.jpeg?isig=0&q=80",
      car price:"Rs. 6.13 - 10.20 Lakh",
      mileage:"18.8 to 26.99 kmpl",
      keyFeatures:
      "The Tata Punch is a spacious, practical, and fuel-efficient car. At the same time, it is rugged-looking and scores high on safety with a five-star GNAP safety rating.",
      Transmission:"Manual & Automatic",
    },
    {
      name:"Land Rover Defender",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/55215/defender-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      car price:"Rs. 93.55 Lakh - 2.30 Crore",
      mileage:"191 to 240 kmph",
      keyFeatures:
      "Land Rover Defender price for the base model starts at Rs. 93.55 Lakh and the top model price goes upto Rs. 2.30 Crore ",
      transmission:"Automatic",
    },
    {
      name:"Mahindra Scorpio N",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
      car price:"Rs. 13.60 - 24.54 Lakh",
      mileage:"15.5 to 30.99 kmpl",
      keyFeatures:
      "If you are looking for a tough ladder-frame SUV which is easy to drive in the city and at the same time, can take on bad roads with ease",
      transmission:"manual & Automatic",
    },
    {
      name:"Hyundai Creta",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.png?isig=0&q=80",
      car price:"Rs. 11.00 - 20.15 Lakh",
      mileage:"Petrol - Manual(1497 cc)18 kmpl	17 kmpl",
      keyFeatures:
      "The prices of the Hyundai Creta have been hiked with immediate effect. Select variants have witnessed a price revision of up to Rs. 11,800."<
      transmission:"manual & Automatic"<
    },
    {
      name:"BMW X1",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80",
      car price:"Rs. 49.50 - 52.50 Lakh",
      mileage:"134 to 147 bhp & 230 to 360 Nm",
      keyFeatures:
      "The BMW X1 is now larger than before. In fact, it appears as big as the X3 from some angles. There’s a sharper design language,",
      transmission:"manual & Automatic",
    },
    {
      name:"MG Hector",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
      car price:"Rs. 13.99 - 22.15 Lakh",
      mileage:"Petrol - Automatic (CVT)(1451 cc)14.75 kmpl	8.8 kmpl",
      keyFeatures:
      "MG’s cash-minting cars have been the Hector and the Astor. Among these, the Hector is the bigger five-seater SUV that has now received a major facelift after its debut in 2019. ",
      transmission:"Manual & Automatic",
    },
    {
      name:"Porsche 911",
      image:"https://imgd.aeplcdn.com/664x374/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154380.jpg?wm=0&q=80",
      car price:"Rs. 1.86 - 4.26 Crore",
      mileage:"291 to 330 kmph",
      keyFeatures:
      "The Porsche 911 is considered to be a dream sports car by many. It is bound to put a smile on your face whether you are sprinting across a race track, driving it around the city or even out in it for a weekend stint. ",
      transmission:"Manual & Automatic"
    },
    {
      name:"kia Sonat",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
      car price:"Rs. 7.99 - 15.75 Lakh",
      mileage:"Petrol - Manual(1197 cc)17.5 kmpl",
      keyFeaures:
      "The 2024 Kia Sonet is an attractive proposition due to its thoughtful packaging. Then, there's the modern design, ",
      transmission:"Manual & Automatic",
    },
    {
      name:"Audi A4",
      image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
      car price:"Rs. 45.34 - 53.50 Lakh",
      mileage:"241 kmph",
      keyFeatures:
      "he Audi A4 receives features such as a virtual cockpit with navigation, three-zone climate control, 10.1-inch infotainment system with MMI touch, and an Audi phonebox with wireless smartphone connectivity and charging",
      transmission:"Manual &Automatic\
      "
    }


      
    

      
    
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
