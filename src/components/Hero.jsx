import React from 'react';
import './Hero.css';

import squareBizLogo from '../assets/square_biz_logo.png'; // Import the logo

const Hero = ({ onStartClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span>Build Your Legacy. Create Your Reality.</span>
                </h1>

                <img src={squareBizLogo} alt="Square Biz AI" className="hero-logo" />

                <p className="hero-subtitle">
                    The ultimate one-stop shop for all your business needs.
                </p>

                <div style={{
                    marginTop: '1rem',
                    marginBottom: '2rem',
                    color: 'var(--accent-secondary)',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    opacity: 0.8
                }}>
                    Powered by mythOS
                </div>
                <button className="hero-cta" onClick={onStartClick}>Start Here</button>
            </div>
        </section>
    );
};

export default Hero;
