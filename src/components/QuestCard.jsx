import React from 'react';
import { motion } from 'framer-motion';
import './QuestCard.css';

const QuestCard = ({ title, description, icon, onClick, delay = 0, price }) => {
  return (
    <motion.div
      className="quest-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      onClick={onClick}
    >
      <div className="quest-icon">{icon}</div>
      <h3 className="quest-title">{title}</h3>
      <p className="quest-desc">{description}</p>
      {price && <p className="quest-price">{price}</p>}
      <button className="quest-action">Accept Quest</button>
    </motion.div>
  );
};

export default QuestCard;
