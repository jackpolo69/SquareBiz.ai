import React from 'react';
import './Hero.css';

const Hero = ({ onStartClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span>Build Your Legacy. Create Your Reality.</span>
                    SquareBiz.ai
                </h1>
                <p className="hero-subtitle">
                    Expedite your fullest potential.<br />
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
