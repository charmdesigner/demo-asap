import React, { useEffect, useState } from "react";
import "./TypingAnimation.scss";

const TypingAnimation = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const [loopCount, setLoopCount] = useState(0); // State to track loop count

  useEffect(() => {
    let timer;
    if (index < text.length) {
      timer = setTimeout(() => {
        setAnimatedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else {
      if (loopCount < 2) {
        // Check if loop count is less than 3
        setIndex(0);
        setAnimatedText("");
        setLoopCount((prevLoopCount) => prevLoopCount + 1); // Increment loop count
      }
    }

    return () => clearTimeout(timer);
  }, [index, text, loopCount]);

  return (
    <>
      {animatedText.split("").map((letter, i) => (
        <span key={i} className={`letter ${letter === " " ? "space" : ""}`}>
          {letter}
        </span>
      ))}
    </>
  );
};
export default TypingAnimation;
