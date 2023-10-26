"use client"
import { useState } from 'react';
import React from 'react';
import ProblemCard from './ProblemCard';
import { motion } from 'framer-motion';


function Problems() {
  const problems = [
    {
      emoji: '🤔',
      title: 'You argue with your colleague',
      description: 'You get angry and defensive, instead of staying open and working towards common ground.',
      color: "bg-blue-400"
    },
    {
      emoji: '🤨',
      title: 'You get a promotion at work',
      description: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
      color: "bg-green-300"
    },
    {
      emoji: '😀',
      title: 'You argue with your colleague',
      description: 'You get angry and defensive, instead of staying open and working towards common ground.',
      color: "bg-red-300"
    },
    {
      emoji: '😯',
      title: 'You get a promotion at work',
      description: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
      color: "bg-blue-400"
    },
    {
      emoji: '😖',
      title: 'You argue with your colleague',
      description: 'You get angry and defensive, instead of staying open and working towards common ground.',
      color: "bg-green-300"
    },
    {
      emoji: '😵',
      title: 'You get a promotion at work',
      description: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
      color: "bg-red-300"
    },
    {
      emoji: '😖',
      title: 'You argue with your colleague',
      description: 'You get angry and defensive, instead of staying open and working towards common ground.',
      color: "bg-blue-400"
    },
    {
      emoji: '😵',
      title: 'You get a promotion at work',
      description: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
      color: "bg-green-300"
    },
    {
      emoji: '😖',
      title: 'You argue with your colleague',
      description: 'You get angry and defensive, instead of staying open and working towards common ground.',
      color: "bg-red-300"
    }
  ];
  
      return (
        <div className='m-6 sm:m-10 relative'>
          <motion.h1
            className='font-bold text-4xl sm:text-5xl absolute top-0 sm:-top-14 h-60'
            initial={{ left: "-20%" }}
            whileInView={{ left: 0 }}
            transition={{ duration: 1 }}
          >
            Does this sound familiar...
          </motion.h1>
          <div className="overflow-x-auto problems">
            {problems.map((problem, index) => (
              <ProblemCard problem={problem} key={index} />
            ))}
          </div>
        </div>
      );
    }
    
    export default Problems;

