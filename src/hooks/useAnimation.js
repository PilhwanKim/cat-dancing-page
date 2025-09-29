import { useState, useEffect } from 'react';

export const useAnimation = (initialState = false) => {
  const [isAnimating, setIsAnimating] = useState(initialState);

  const toggleAnimation = () => {
    setIsAnimating(prev => !prev);
  };

  const startAnimation = () => {
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  };
};