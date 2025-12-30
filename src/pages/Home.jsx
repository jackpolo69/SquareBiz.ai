import React, { useState } from 'react';
import Hero from '../components/Hero';
import QuestCard from '../components/QuestCard';
import ContactModal from '../components/ContactModal';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

import QuestDetailsModal from '../components/QuestDetailsModal';
import { ownerQuests, entrepreneurQuests } from '../data/quests';

const Home = () => {
    const [activePersona, setActivePersona] = useState('entrepreneur'); // 'owner' or 'entrepreneur'
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [selectedQuest, setSelectedQuest] = useState(null);
    const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);

    const quests = activePersona === 'owner' ? ownerQuests : entrepreneurQuests;

    const [initialMessage, setInitialMessage] = useState('');

    const handleQuestClick = (quest) => {
        setSelectedQuest(quest);
        setIsQuestModalOpen(true);
    };

    const handleAcceptQuest = (quest) => {
        setIsQuestModalOpen(false);
        setInitialMessage(`I am ready to accept the mission: ${quest.title}. Requesting immediate briefing.`);
        setIsContactModalOpen(true);
    };

    const handleStartClick = () => {
        setInitialMessage('');
        setIsContactModalOpen(true);
    };

    return (
        <div className="home-page">
            <Navbar />
            <Hero onStartClick={handleStartClick} />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                initialMessage={initialMessage}
            />
            <QuestDetailsModal
                isOpen={isQuestModalOpen}
                onClose={() => setIsQuestModalOpen(false)}
                quest={selectedQuest}
                onAccept={handleAcceptQuest}
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
                            📉 Mission Critical (Business Compliance)
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
                            onClick={() => handleQuestClick(quest)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
