import React from 'react';

export interface TypewriterProps {
  loop?: boolean;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  words:string[];
}

declare const Typewriter: React.SFC<TypewriterProps>

export default Typewriter