import React, { useEffect, useState } from 'react';
import "./TypingAnimation.scss";

const TypingAnimation = ({ text })=> {
    const [index, setIndex] = useState(0);
    const [animatedText, setAnimatedText] = useState('');
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedText(prevText => {
          if (index < text.length) {
            return prevText + text[index];
          } else {
            setIndex(0); // Reset index when end of text is reached
            return '';
          }
        });
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    }, [index, text]);

  return (
    <>
        {animatedText.split('').map((letter, i) => (
          <span key={i} className={`letter ${letter === ' ' ? 'space' : ''}`}>{letter}</span>
        ))}
     </>
  );
}
export default TypingAnimation;