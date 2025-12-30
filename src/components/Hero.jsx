import React from 'react';
import './Hero.css';
import heroImage from '../assets/IMG_6214.png';

const Hero = ({ onStartClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span>Build Your Legacy. Create Your Reality.</span>
                    <img src={heroImage} alt="SquareBiz.ai" className="hero-logo" />
                </h1>
                <p className="hero-subtitle">
                    Square Biz expedites your fullest potential.<br />
                    The ultimate one-stop shop for all your business needs.
                </p>
                <div style={{
                    marginTop: '-1rem',
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
