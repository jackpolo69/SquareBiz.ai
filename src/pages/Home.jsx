import React, { useState } from 'react';
import Hero from '../components/Hero';
import QuestCard from '../components/QuestCard';
import ContactModal from '../components/ContactModal';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Home = () => {
    const [activePersona, setActivePersona] = useState('entrepreneur'); // 'owner' or 'entrepreneur'
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ownerQuests = [
        {
            id: 1,
            title: "Operation: Reinstatement",
            description: "Revive your legacy. We restore your S-Corp, C-Corp, or LLC to good standing, handling all state fines and filings.",
            icon: "❤️‍🩹",
            difficulty: "Likely",
            price: "Starts at $674"
        },
        {
            id: 2,
            title: "Tax Relief Protocol",
            description: "Conquer your taxes. From 1040s to 1120s, we navigate the complex terrain to maximize your returns.",
            icon: "🛡️",
            difficulty: "Critical",
            price: "Starts at $299"
        },
        {
            id: 3,
            title: "Compliance Shield",
            description: "Stay Mission Ready. We file your BOI reports and ensure you meet all federal requirements.",
            icon: "🔒",
            difficulty: "Essential",
            price: "Only $150"
        }
    ];

    const entrepreneurQuests = [
        {
            id: 4,
            title: "Foundation Formation",
            description: "Build your base. We form your LLC or Corp with precision, setting the stage for future victory.",
            icon: "🏗️",
            difficulty: "Strategic",
            price: "Starts at $299"
        },
        {
            id: 5,
            title: "Proprietary Credit Access",
            description: "Fuel the Mission. Exclusive access to our proprietary business credit card to fund your expansion.",
            icon: "💳",
            difficulty: "Exclusive",
            price: "Apply Now"
        },
        {
            id: 6,
            title: "Digital Fortress: Web Design",
            description: "Command attention. Premium, high-converting web design that establishes your dominance online.",
            icon: "🖥️",
            difficulty: "Creative",
            price: "Custom Build"
        },
        {
            id: 7,
            title: "Scale The Empire: Funnels",
            description: "Automate your growth. High-performance sales funnels designed to convert traffic into revenue.",
            icon: "🚀",
            difficulty: "Advanced",
            price: "Consultation"
        },
        {
            id: 8,
            title: "Tactical Bookkeeping",
            description: "Know your position. Accurate financial tracking to keep your business profitable and audit-proof.",
            icon: "📊",
            difficulty: "Ongoing",
            price: "Custom"
        },
        {
            id: 9,
            title: "Defense Systems: Insurance",
            description: "Fortify your position. Comprehensive coverage for General Liability, Commercial Auto, and Asset Protection.",
            icon: "🏰",
            difficulty: "Critical",
            price: "Get Quote"
        },
        {
            id: 10,
            title: "Command Center: Contracts & Notary",
            description: "Secure Alliances. Create/sign contracts (DocuSign® style) and access 24/7 Digital Notary services.",
            icon: "✍️",
            difficulty: "Essential",
            price: "Access Now"
        },
        {
            id: 11,
            title: "Media & Branding Arsenal",
            description: "Dominate the feed. Expert logo creation, high-performance social ads, and broadcast-quality video commercials.",
            icon: "🎥",
            difficulty: "Creative",
            price: "Start Production"
        },
        {
            id: 12,
            title: "Global Domination Protocol",
            description: "The Nuclear Option. Complete strategic outline + ALL services. We scale you to your fullest potential in record time.",
            icon: "👑",
            difficulty: "Legendary",
            price: "$15k + 30% Equity/Rev"
        }
    ];
    const quests = activePersona === 'owner' ? ownerQuests : entrepreneurQuests;

    const [initialMessage, setInitialMessage] = useState('');

    const handleQuestClick = (questTitle) => {
        setInitialMessage(`I am ready to accept the mission: ${questTitle}. Requesting immediate briefing.`);
        setIsModalOpen(true);
    };

    const handleStartClick = () => {
        setInitialMessage('');
        setIsModalOpen(true);
    };

    return (
        <div className="home-page">
            <Navbar />
            <Hero onStartClick={handleStartClick} />
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialMessage={initialMessage}
            />

            <section className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="text-gradient">
                        {activePersona === 'owner' ? "Abort The Crash. Revive The Mission." : "Initialize Your Vision. Execute."}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>IDENTIFY YOUR CURRENT STATUS:</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => setActivePersona('owner')}
                            style={{
                                padding: '1rem 2rem',
                                background: activePersona === 'owner' ? 'rgba(112, 0, 255, 0.2)' : 'transparent',
                                border: `1px solid ${activePersona === 'owner' ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.2)'}`,
                                color: '#fff',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                boxShadow: activePersona === 'owner' ? '0 0 20px rgba(112, 0, 255, 0.4)' : 'none',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            📉 Mission Critical (Struggling Owner)
                        </button>
                        <button
                            onClick={() => setActivePersona('entrepreneur')}
                            style={{
                                padding: '1rem 2rem',
                                background: activePersona === 'entrepreneur' ? 'rgba(0, 240, 255, 0.2)' : 'transparent',
                                border: `1px solid ${activePersona === 'entrepreneur' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)'}`,
                                color: '#fff',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                boxShadow: activePersona === 'entrepreneur' ? '0 0 20px rgba(0, 240, 255, 0.4)' : 'none',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            ✨ Visionary (Aspiring Entrepreneur)
                        </button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {quests.map((quest, index) => (
                        <QuestCard
                            key={quest.id}
                            {...quest}
                            delay={index * 0.2}
                            onClick={() => handleQuestClick(quest.title)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
