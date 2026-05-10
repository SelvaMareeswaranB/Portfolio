"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

// Separate the words so they wrap as whole blocks on mobile
const ENGLISH_WORDS = ["SELVA", "MAREESWARAN"];
const JAPANESE_WORDS = ["セルヴァ", "マリースワラン"];
const DURATION = 600;

const englishAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const japaneseCharacters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコ".split("");

const getRandomChar = (pool: string[]) => pool[Math.floor(Math.random() * pool.length)];

interface HyperTextProps {
  className?: string;
}

export default function HyperText({ className }: HyperTextProps) {
  const [isJapanese, setIsJapanese] = useState(false);
  
  // Track state for each word separately to keep animation crisp
  const currentWords = isJapanese ? JAPANESE_WORDS : ENGLISH_WORDS;
  const [displayWords, setDisplayWords] = useState(ENGLISH_WORDS);

  const iterations = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const runMorphAnimation = (toWords: string[], useJapaneseChars: boolean) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    iterations.current = 0;
    // Base length on total characters combined
    const totalLength = toWords.join("").length;
    const intervalDelay = DURATION / (totalLength * 10);
    const charPool = useJapaneseChars ? japaneseCharacters : englishAlphabets;

    intervalRef.current = setInterval(() => {
      // Determine if the longest word has finished morphing
      const maxWordLength = Math.max(...toWords.map(w => w.length));

      if (iterations.current < maxWordLength) {
        setDisplayWords(() => {
          return toWords.map((word) => {
            return Array.from({ length: word.length })
              .map((_, i) => {
                if (i <= Math.floor(iterations.current)) {
                  return word[i];
                }
                return getRandomChar(charPool);
              })
              .join("");
          });
        });

        iterations.current += 0.18; // Speed of transition
      } else {
        setDisplayWords(toWords);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, intervalDelay);
  };

  const handleMouseEnter = () => {
    setIsJapanese(true);
    runMorphAnimation(JAPANESE_WORDS, true);
  };

  const handleMouseLeave = () => {
    setIsJapanese(false);
    runMorphAnimation(ENGLISH_WORDS, false);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center lg:justify-start cursor-default scale-100 py-2 select-none gap-x-3 gap-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="popLayout">
        {displayWords.map((word, wordIdx) => (
          // flex-row keep letters of a single word together, preventing letters from wrapping individually
          <div key={`word-${wordIdx}`} className="flex items-center">
            {word.split("").map((letter, letterIdx) => (
              <motion.span
                // Unique key per word + index prevents transition collision
                key={`${currentWords[wordIdx]}-${letterIdx}`}
                className={cn(
                  "font-mono transition-colors duration-300 inline-block",
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
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}