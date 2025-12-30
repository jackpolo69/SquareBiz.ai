import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import BookingModal from './BookingModal';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Don't show "Sign In" if already on dashboard
    const isDashboard = location.pathname === '/portal';

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="SquareBiz.ai" />
                </Link>

                <div className="nav-actions">
                    {!isDashboard && (
                        <>
                            <button
                                className="nav-btn nav-btn-book"
                                onClick={() => setIsBookingOpen(true)}
                            >
                                <span>📞</span> Secure Comms
                            </button>
                            <Link to="/portal" className="nav-btn nav-btn-signin">
                                Sign In
                            </Link>
                        </>
                    )}
                    {isDashboard && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <span>Agents Online: 1</span>
                            <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
                        </div>
                    )}
                </div>
            </nav>
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
};

export default Navbar;
