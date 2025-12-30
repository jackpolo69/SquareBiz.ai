import React from 'react';
import './Hero.css';

const Hero = ({ onStartClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span>Level Up Your Business</span>
                    SquareBiz.ai
                </h1>
                <p className="hero-subtitle">
                    The ultimate portal for Entrepreneurs and Business Owners.
                    Expediting all your business needs.
                </p>
                <button className="hero-cta" onClick={onStartClick}>Start Here</button>
            </div>
        </section>
    );
};

export default Hero;
