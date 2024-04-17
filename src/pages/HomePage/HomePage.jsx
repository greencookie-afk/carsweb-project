import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="background-image">
                <div className="overlay">
                    <div className="content">
                        <h1>Engineered to Excite</h1>
                        <p>Discover cutting-edge designs and performance innovation in our latest models.</p>
                        <button className="discover-btn">Discover Now</button>
                    </div>
                </div>
            </div>

            <div className="model-showcase">
                <h2>Porsche 911 gt3 rs</h2>
            </div>

            <div className="specs-section">
                <div className="specs-details">
                    <div className="spec">
                        <h3>Performance</h3>
                        <p>0-60 mph in just 3.2 seconds</p>
                    </div>
                    <div className="spec">
                        <h3>Efficiency</h3>
                        <p>Up to 310 mph</p>
                    </div>
                    <div className="spec">
                        <h3>Technology</h3>
                        <p>Lorem ipsum dolor sit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
