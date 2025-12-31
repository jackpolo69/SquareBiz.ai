import React from 'react';
import './Hero.css';

import squareBizLogo from '../assets/square_biz_logo_wide.png'; // Import the logo

const Hero = ({ onStartClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Business. Evolved.
                </h1>

                <img src={squareBizLogo} alt="Square Biz AI" className="hero-logo" />

                <div className="hero-text-bottom">
                    <div className="hero-powered-by">
                        Powered by mythOS
                    </div>
                    <button className="hero-cta" onClick={onStartClick}>Start Here</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
