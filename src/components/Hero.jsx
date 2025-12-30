import React from 'react';
import './Hero.css';

import squareBizLogo from '../assets/square_biz_logo_wide.png'; // Import the logo

const Hero = ({ onStartClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-background" style={{
                backgroundImage: `url(${squareBizLogo})`,
                opacity: 1 // Ensure visibility
            }}></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Business. Evolved.
                </h1>

                {/* Spacer or padding will be handled in CSS to push text apart */}

                <div className="hero-text-bottom">


                    <div style={{
                        marginTop: '0.5rem',
                        marginBottom: '2rem',
                        color: 'var(--accent-secondary)',
                        fontSize: '0.9rem',
                        letterSpacing: '2px',
                        fontWeight: 'bold',
                        opacity: 0.8
                    }}>
                        Powered by mythOS
                    </div>
                    <button className="hero-cta" onClick={onStartClick}>Start Here</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
