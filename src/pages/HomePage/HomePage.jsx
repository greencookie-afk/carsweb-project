import React from 'react';
import './HomePage.css';
import carImage from './Porsche stock image.png';
import model2 from './model 2.png'

const HomePage = () => {
<<<<<<< HEAD
  return (
    <>
    

      <div className="main-body">
        <div className="image-text-container">
          <h1 className='back-text'>Porsche <span className='nine'>9</span>11</h1>
          <p className='back-text2'>Performance, style and innovation</p>
          <img src={carImage} alt="Car" className="car-image" />
        </div>
      </div>
      <div className='btn-container'>
        <a href="" className='specs-button'>Specifications</a>
        <a href="" className='order-button'>Order Now</a>
      </div>

      <div className='models'>
        <h1>Models</h1>
      </div>
      <div className='car-models'>
        <div className="car">
          <img src={carImage} alt="" />
        <h3>Porsche 911</h3>
        <p>sample text</p>
      </div>
      <a href="" className='order-button'>Built Your own</a>
        </div>

        <div className='car-models'>
        <div className="car">
          <img src={model2} alt="" />
        <h3>Porsche 918 spyder</h3>
        <p>Sample text</p>
      </div>
      <a href="" className='order-button'>Built Your own</a>
        </div>
=======
    return (
        <>
            <div className="main-body">
                <div className="image-text-container">
                    <div className="main-text">
                        <h1 className='back-text'>Porsche <span className='nine'>9</span>11</h1>
                        <p className='back-text2'>Performance, style and innovation</p>
                    </div>

                    <img src={carImage} alt="Car" className="car-image" />
                </div>
            </div>
            <div className='btn-container'>
                <a href="" className='specs-button'>Specifications</a>
                <a href="" className='order-button'>Order Now</a>
            </div>

            <div className='models'>
                <h1>Models</h1>
            </div>
            <div className='car-models'>
                <div className="car">
                    <img src={carImage} alt="" />
                    <h3>Porsche 911</h3>
                    <p>sample text</p>
                </div>
                <a href="" className='specs-button'>Specifications</a>
            </div>

            <div className='car-models'>
                <div className="car">
                    <img src={model2} alt="" />
                    <h3>Porsche 918 spyder</h3>
                    <p>Sample text</p>
                </div>
                <a href="" className='specs-button'>Specifications</a>
            </div>
>>>>>>> e9df1414e002b1f3d6da915846b4386a46dbf2f3

        

    </>
  );
};

export default HomePage;
