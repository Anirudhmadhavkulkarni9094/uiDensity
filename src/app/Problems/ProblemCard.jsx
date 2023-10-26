import React from 'react';
import { motion } from 'framer-motion';

function ProblemCard({ problem, index }) {
  return (
    <motion.div
      key={index}
      className={`problems-card ${problem.color} p-4 sm:p-6`}
      initial={{ rotate: 0, scale: 0.95 }}
      whileHover={{ rotate: -5, scale: 1.05 }}
      transition={{ duration: 2, type: "spring", damping: 3 }}
    >
      <h1 className="text-xl sm:text-xl m-4">{problem.emoji}</h1>
      <h2 className='font-bold text-lg sm:text-xl'>{problem.title}</h2>
      <p className="text-xs sm:text-base">{problem.description}</p>
    </motion.div>
  );
}

export default ProblemCard;
