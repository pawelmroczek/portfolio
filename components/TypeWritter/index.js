"use client";
import { useEffect, useState } from "react";

const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === text[textIndex].length - 1) {
        setDirection(-1);
      } else if (currentIndex === 0) {
        if(currentIndex === 0 && direction === -1){
          setTextIndex(textIndex === text.length - 1 ? 0 : textIndex + 1);
        }
        setDirection(1);
        
      }
      setCurrentIndex(currentIndex + direction);
      setCurrentText(text[textIndex].slice(0, currentIndex + 1));
    },delay);

    return () => clearInterval(interval);
  },[currentIndex,currentIndex,direction,textIndex]);

  return currentText;
};

export default TypeWriter;
