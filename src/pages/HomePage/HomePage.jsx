import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="background-image">
                <div className="overlay">
                    <div className="content">
                        <h1>Engineered to Excite</h1>
                        <button className="discover-btn">Discover Now</button>
                    </div>
                </div>
            </div>
            
            <div className="featured-cars">
                <h1>Featured Cars</h1>
                <div className="car">
                    <img src="https://c4.wallpaperflare.com/wallpaper/688/262/354/911-porsche-side-view-turbo-s-2020-hd-wallpaper-preview.jpg" alt="Car Model One"/>
                    <h3>Model One</h3>
                    <p>The future of driving.</p>
                </div>
                <div className="car">
                    <img src="https://c4.wallpaperflare.com/wallpaper/688/262/354/911-porsche-side-view-turbo-s-2020-hd-wallpaper-preview.jpg" alt="Car Model Two"/>
                    <h3>Model Two</h3>
                    <p>Redefined luxury and performance.</p>
                </div>
                {/* Additional cars can be added here */}
            </div>
        </div>
    );
}

export default HomePage;
