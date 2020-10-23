declare module "react-simple-typewriter" {
  import React from 'react';

  interface TypewriterProps {
    loop?: boolean;
    cursor?: boolean;
    cursorStyle?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
    words:string[]
  }

  export const Typewriter: (props: TypewriterProps) => React.SFC<TypewriterProps>
}


