"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

// Hardcoded values
const ENGLISH_TEXT = "SELVA MAREESWARAN";
const JAPANESE_TEXT = "セルヴァ マリースワラン";
const DURATION = 600;

// Scramble character pools
const englishAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const japaneseCharacters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコ".split("");

const getRandomChar = (pool: string[]) => pool[Math.floor(Math.random() * pool.length)];

interface HyperTextProps {
  className?: string;
}

export default function HyperText({ className }: HyperTextProps) {
  const [isJapanese, setIsJapanese] = useState(false);
  const [displayText, setDisplayText] = useState(ENGLISH_TEXT.split(""));
  
  const targetText = isJapanese ? JAPANESE_TEXT : ENGLISH_TEXT;
  const iterations = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const runMorphAnimation = (toText: string, useJapaneseChars: boolean) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    iterations.current = 0;
    const textLength = toText.length;
    const intervalDelay = DURATION / (textLength * 10);
    const charPool = useJapaneseChars ? japaneseCharacters : englishAlphabets;

    intervalRef.current = setInterval(() => {
      if (iterations.current < textLength) {
        setDisplayText(() => {
          return Array.from({ length: textLength }).map((_, i) => {
            const targetChar = toText[i];

            // Keep spaces untouched
            if (targetChar === " ") return " ";

            // Lock in character once iteration threshold is passed
            if (i <= Math.floor(iterations.current)) {
              return targetChar;
            }

            // Scramble using matching characters
            return getRandomChar(charPool);
          });
        });
        
        iterations.current += 0.15; // Controls the speed of the transition
      } else {
        setDisplayText(toText.split(""));
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, intervalDelay);
  };

  const handleMouseEnter = () => {
    setIsJapanese(true);
    runMorphAnimation(JAPANESE_TEXT, true);
  };

  const handleMouseLeave = () => {
    setIsJapanese(false);
    runMorphAnimation(ENGLISH_TEXT, false);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="cursor-default scale-100 overflow-hidden py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="popLayout">
        {displayText.map((letter, i) => (
          <motion.span
            key={`${targetText}-${i}`} // Layout animation triggers on key/size change
            className={cn(
              "font-mono transition-colors duration-300", 
              letter === " " ? "w-[0.5em]" : "", 
              className
            )}
            layout
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}