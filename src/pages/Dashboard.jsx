import React from 'react';
import Navbar from '../components/Navbar';
import QuestCard from '../components/QuestCard';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <div>
                        <h1 className="dashboard-title text-gradient">Mission Command</h1>
                        <div className="user-rank">Rank: Initiate • Level 1</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'var(--text-secondary)' }}>Available Credits</div>
                        <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>$0.00</div>
                    </div>
                </header>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">0</div>
                        <div className="stat-label">Active Missions</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">0%</div>
                        <div className="stat-label">Empire Completion</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">N/A</div>
                        <div className="stat-label">Next Objective</div>
                    </div>
                </div>

                <div className="active-missions">
                    <h2 className="section-title">Available Operations</h2>

                    <div style={{
                        padding: '2rem',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '16px',
                        border: '1px dashed rgba(255,255,255,0.1)',
                        textAlign: 'center',
                        color: 'var(--text-secondary)'
                    }}>
                        <p>No active missions. Select a quest from the Home base to begin your expansion.</p>
                        <br />
                        <button
                            style={{
                                padding: '0.8rem 2rem',
                                background: 'transparent',
                                border: '1px solid var(--accent-primary)',
                                color: 'var(--accent-primary)',
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                            onClick={() => window.location.href = '/'}
                        >
                            View Quests
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
