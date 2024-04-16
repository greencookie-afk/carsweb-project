import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="background-image">
                <div className="overlay"> {}
                    <div className="content">
                        <h1>Engineered to Excite</h1>
                        <button className="discover-btn">Discover Now</button>
                    </div>
                </div>
            </div>
            
            <div className="additional-content">
                {/* Placeholder for additional content */}
                <h2>Featured Cars</h2>
                <p>Explore our top models and latest offers.</p>
            </div>
        </div>
    );
}

export default HomePage;
