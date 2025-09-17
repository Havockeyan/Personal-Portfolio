'use client';

import { useState, useEffect, useMemo } from 'react';

export default function ScrollingText() {
  const roles = useMemo(() => [
    'Web Developer',
    'Front End Dev',
    'Full Stack Dev',
    'React Developer',
    'JavaScript Developer',
    'UI/UX Developer',
    'Software Engineer'
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Debug: Log when component mounts
  useEffect(() => {
    console.log('ScrollingText component mounted');
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    console.log('Effect running:', { currentRole, currentText, isDeleting, currentIndex });
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentText.length < currentRole.length) {
          const newText = currentRole.slice(0, currentText.length + 1);
          console.log('Typing:', newText);
          setCurrentText(newText);
        } else {
          // Finished typing, wait then start deleting
          console.log('Starting to delete in 2 seconds');
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          const newText = currentText.slice(0, -1);
          console.log('Deleting:', newText);
          setCurrentText(newText);
        } else {
          // Finished deleting, move to next role
          console.log('Moving to next role');
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150); // Faster deleting, slower typing

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="typewriter-wrapper">
      <span className="typewriter-text">
        {currentText || roles[0]}
        <span className={`typewriter-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
      </span>
    </span>
  );
}
