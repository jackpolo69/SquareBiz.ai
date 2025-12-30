import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuestDetailsModal.css';

const QuestDetailsModal = ({ isOpen, onClose, quest, onAccept }) => {
    if (!isOpen || !quest) return null;

    const isGlobalDomination = quest.title.includes("Global Domination Protocol");

    return (
        <AnimatePresence>
            <div className="quest-modal-overlay" onClick={onClose}>
                <motion.div
                    className="quest-modal-content"
                    onClick={e => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                >
                    <button className="quest-close" onClick={onClose}>&times;</button>

                    <div className="quest-modal-header">
                        <div className="quest-modal-icon">{quest.icon}</div>
                        <h2 className="quest-modal-title">{quest.title}</h2>
                    </div>

                    <div className="quest-modal-body">
                        <div className="quest-meta">
                            <div className="meta-item">
                                <span className="meta-label">Difficulty</span>
                                <div className="meta-value">{quest.difficulty}</div>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Investment</span>
                                <div className="meta-value">{quest.price}</div>
                            </div>
                        </div>

                        <p className="quest-description">{quest.description}</p>

                        {isGlobalDomination && (
                            <div className="global-domination-notice">
                                <div className="notice-icon">👑</div>
                                <div className="notice-text">
                                    <strong>Global Domination Unlocked:</strong><br />
                                    All in-house fees are WAIVED. You are only responsible for third-party fees, including federal and state filings, surcharges, penalties, and taxes if applicable.
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="quest-modal-footer">
                        <button className="btn-accept-quest" onClick={() => onAccept(quest)}>
                            Accept Quest
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default QuestDetailsModal;
