import React from 'react';
import './CarPage.css';

function CarPage() {
    return (
        <div>
            <div className='big-div'>
                <div className="sidebar-drop"></div>

                <div className="header-body">
                    <h1 className="title">Porsche 718</h1>
                    <div>
                        <p>Illuminated by a soft glow, the Porsche 718 Cayman GT4 sits majestically in a hushed garage. Its sleek profile and race-inspired decals hint at the power and agility that await the night.</p>
                        <div className="stats">
                            <div className='statistics'>
                                <div className="gauge">
                                    <h2>1.9 <span>s</span></h2>
                                    <small>0-60mph</small>
                                </div>
                                <div>
                                    <h2>
                                        <span>+</span>250 <span>mph</span>
                                    </h2>
                                    <small>Top speed</small>
                                </div>
                                <div>
                                    <h2>620 <span>s</span></h2>
                                    <small>Range</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="specs">
                <ul>
                    <li>
                        <span>Base Specs</span>
                    </li>
                    <li>
                        <span>Acceleration 0-60 mph</span>
                        <span>1.9s</span>
                    </li>
                    <li>
                        <span>Acceleration 0-100 mph</span>
                        <span>4.2s</span>
                    </li>
                    <li>
                        <span>Acceleration 1/4 mile</span>
                        <span>8.8s</span>
                    </li>
                    <li>
                        <span>Top Speed</span>
                        <span>Over 250mph</span>
                    </li>
                    <li>
                        <span>Wheel Torque</span>
                        <span>10,000 Nm</span>
                    </li>
                    <li>
                        <span>Mile Range</span>
                        <span>620 miles</span>
                    </li>
                    <li>
                        <span>Seating</span>
                        <span>4</span>
                    </li>
                    <li>
                        <span>Drive</span>
                        <span>All-Wheel-Drive</span>
                    </li>
                </ul>
            </section>

            <section className="about">
                <div className="about-text">
                    <h2>
                        Designed for performance
                        and efficiency
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, qui.</p>
                </div>
            </section>

            <section className="interior">
                <div>
                    <h2>Interior</h2>
                    <p>
                        The first supercar to set every performance record and still fit seating for four
                    </p>
                </div>
            </section>
        </div>
    );
}

export default CarPage;
