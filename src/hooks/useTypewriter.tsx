"use client";

import { useCallback, useEffect, useRef, useReducer } from "react";
import { reducer } from "../reducer";

export type TypewriterProps = {
  /** Callback Function that is triggered when loops are completed. available if loop is > `0` */
  onLoopDone?: () => void;
  /** Callback Function that is triggered while typing with `typed` words count passed */
  onType?: (count: number) => void;
  /** Callback Function that is triggered while deleting */
  onDelete?: () => void;
  /** Callback Function that is triggered on typing delay */
  onDelay?: () => void;
  /** Array of strings holding the words */
  words: string[];
  /** Control how many times to run. `0 | false` to run infinitely */
  loop?: number;
  /** Character typing speed in Milliseconds */
  typeSpeed?: number;
  /** Character deleting speed in Milliseconds */
  deleteSpeed?: number;
  /** Delay time between the words in Milliseconds */
  delaySpeed?: number
  /** Start the typewriter from empty or full word */
  startFrom?: 'empty' | 'full'
}


export type TypewriterHelper = {
  /** `true` if currently typing */
  isType: boolean;
  /** `true` if on delay */
  isDelay: boolean;
  /** `true` if currently deleting */
  isDelete: boolean;
  /** `true` if all loops are done */
  isDone: boolean;
};

export const useTypewriter = ({
  words = ["Hello World!", "This is", "a simple Typewriter"],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType,
  onDelete,
  onDelay,
  startFrom = 'empty'
}: TypewriterProps): [string, TypewriterHelper] => {
  const [{ speed, text, count }, dispatch] = useReducer(reducer, {
    speed: typeSpeed,
    text: startFrom === 'full' ? words[0] : '',
    count: 0
  })

  // Refs
  const loops = useRef(0);
  const isDone = useRef(false);
  const isDelete = useRef(false);
  const isType = useRef(false);
  const isDelay = useRef(false);

  const handleTyping = useCallback(() => {
    const index = count % words.length;
    const fullWord = words[index];

    if (!isDelete.current) {
      dispatch({ type: "TYPE", payload: fullWord, speed: typeSpeed });
      isType.current = true;

      if (text === fullWord) {
        dispatch({ type: "DELAY", payload: delaySpeed });
        isType.current = false;
        isDelay.current = true;

        setTimeout(() => {
          isDelay.current = false;
          isDelete.current = true;
        }, delaySpeed);
        
        if (loop > 0) {
          loops.current += 1;
          if (loops.current / words.length === loop) {
            isDelay.current = false;
            isDone.current = true;
          }
        }
      }
    } else {
      dispatch({ type: "DELETE", payload: fullWord, speed: deleteSpeed });
      if (text === "") {
        isDelete.current = false;
        dispatch({ type: "COUNT" });
      }
    }

    if (isType.current) {
      if (onType) onType(loops.current);
    }

    if (isDelete.current) {
      if (onDelete) onDelete();
    }

    if (isDelay.current) {
      if (onDelay) onDelay();
    }
  }, [count, delaySpeed, deleteSpeed, loop, typeSpeed, words, text, onType, onDelete, onDelay]);

  useEffect(() => {
    const typing = setTimeout(handleTyping, speed);

    if (isDone.current) clearTimeout(typing);

    return () => clearTimeout(typing);
  }, [handleTyping, speed]);

  useEffect(() => {
    if (!onLoopDone) return;

    if (isDone.current) {
      onLoopDone();
    }
  }, [onLoopDone]);

  return [
    text,
    {
      isType: isType.current,
      isDelay: isDelay.current,
      isDelete: isDelete.current,
      isDone: isDone.current,
    },
  ];
};
