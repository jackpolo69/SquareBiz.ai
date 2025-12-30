import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import QuestCard from '../components/QuestCard';
import QuestDetailsModal from '../components/QuestDetailsModal'; // Import the modal
import './Dashboard.css';
import { entrepreneurQuests } from '../data/quests';

const Dashboard = () => {
    // For demo purposes, let's assume the user is an entrepreneur
    // and has completed the first quest, is working on the second, and others are locked/available
    const activeQuest = entrepreneurQuests[1]; // Proprietary Credit Access
    const nextQuests = entrepreneurQuests.slice(2);

    const [selectedQuest, setSelectedQuest] = useState(null);
    const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);

    const handleQuestClick = (quest) => {
        setSelectedQuest(quest);
        setIsQuestModalOpen(true);
    };

    const handleAcceptQuest = (quest) => {
        // Logic to accept/continue quest would go here
        // For now, just close modal
        setIsQuestModalOpen(false);
        alert(`Mission Accepted: ${quest.title}`);
    };

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <div>
                        <h1 className="dashboard-title text-gradient">Mission Command</h1>
                        <div className="user-rank">Rank: Initiate • Level 2</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'var(--text-secondary)' }}>Available Credits</div>
                        <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>$1,250.00</div>
                    </div>
                </header>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">1</div>
                        <div className="stat-label">Active Missions</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">12%</div>
                        <div className="stat-label">Empire Completion</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">Credit Access</div>
                        <div className="stat-label">Current Objective</div>
                    </div>
                </div>

                <div className="active-missions">
                    <h2 className="section-title">Current Operation</h2>
                    <div style={{ marginBottom: '2rem' }}>
                        <QuestCard {...activeQuest} onClick={() => handleQuestClick(activeQuest)} />
                    </div>

                    <h2 className="section-title">Future Objectives</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        opacity: 0.7
                    }}>
                        {nextQuests.map(quest => (
                            <QuestCard key={quest.id} {...quest} onClick={() => handleQuestClick(quest)} />
                        ))}
                    </div>
                </div>
            </div>

            <QuestDetailsModal
                isOpen={isQuestModalOpen}
                onClose={() => setIsQuestModalOpen(false)}
                quest={selectedQuest}
                onAccept={handleAcceptQuest}
            />
        </div>
    );
};

export default Dashboard;
