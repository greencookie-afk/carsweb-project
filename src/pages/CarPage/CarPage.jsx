
import './CarPage.css';

function Porsche911() {
    return (
        <div>
            <header>
                <div className="sidebar-drop"></div>

                <div className="header-body">
                    <h1 className="title">Porsche 911</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam beatae, aperiam quibusdam tenetur
                            maiores maxime odio animi! Officia voluptate atque error ut quia labore corrupti excepturi explicabo est
                            doloribus! Iste.</p>
                        <div className="stats">
                            <div className="gauge">
                                <img src="CarPage/front.webp" alt="" />
                                <h2>1.9 <span>s</span></h2>
                            </div>
                            <div>
                                <small>0-60mph</small>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>
                                    <span>+</span>250 <span>mph</span>
                                </h2>
                            </div>
                            <div>
                                <small>Top speed</small>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>620 <span>s</span></h2>
                            </div>
                            <div>
                                <small>Range</small>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="video">
                <video autoplay muted loop data-aos="fade-up" data-aos-duration="1200">
                    <source src="CarPage/lv_0_20240415000042.mp4" type="video/mp4" className="video" />
                </video>
            </section>

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
                <img src="CarPage/back.jpeg" data-aos="fade-up" data-aos-duration="1200" />
                <div className="about-text">
                    <h2>
                        Designed for performance
                        and efficiency
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, qui.</p>
                </div>
            </section>

            <section className="interior">
                <img src="CarPage/interior.jpg" data-aos="fade-up" data-aos-duration="1200" />
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
