import React, { useEffect, useState } from "react";
import "./TypingAnimation.scss";

const TypingAnimation = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setAnimatedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index, text]);

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
