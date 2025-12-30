import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, initialMessage = '' }) => {
    const [activeTab, setActiveTab] = useState(initialMessage ? 'contact' : 'signup'); // 'signup' or 'contact'
    const [message, setMessage] = useState(initialMessage);

    // Update state if initialMessage changes when modal opens
    React.useEffect(() => {
        if (initialMessage) {
            setActiveTab('contact');
            setMessage(initialMessage);
        }
    }, [initialMessage, isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="modal-overlay" onClick={onClose}>
                <motion.div
                    className="modal-content"
                    onClick={e => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                >
                    <button className="modal-close" onClick={onClose}>&times;</button>

                    <div className="modal-tabs">
                        <button
                            className={`modal-tab ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signup')}
                        >
                            Enlist Now
                        </button>
                        <button
                            className={`modal-tab ${activeTab === 'contact' ? 'active' : ''}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Communique
                        </button>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        {activeTab === 'signup' ? (
                            <>
                                <div className="form-group">
                                    <label className="form-label">Codename / Full Name</label>
                                    <input type="text" className="form-input" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Secure Frequency (Email)</label>
                                    <input type="email" className="form-input" placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Set Access Key (Password)</label>
                                    <input type="password" className="form-input" placeholder="********" />
                                </div>
                                <button className="modal-submit">Initialize Profile</button>
                            </>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-input" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Contact Email</label>
                                    <input type="email" className="form-input" placeholder="your@email.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Intel Report (Message)</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="I need info on..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button className="modal-submit">Transmit Message</button>
                            </>
                        )}
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ContactModal;
