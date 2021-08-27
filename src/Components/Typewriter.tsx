import React from 'react'
import { Cursor } from './Cursor'
import { TypewriterProps, useTypewriter } from '../Hooks/useTypewriter'

export interface ComponentProps extends TypewriterProps {
  cursor?: boolean
  cursorStyle?: string
}

export const Typewriter = ({
  words = ['Hello', 'World', 'This', 'is', 'Typewriter', 'Component'],
  loop = 1,
  typeSpeed = 90,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType,
  cursor = false,
  cursorStyle = '.'
}: ComponentProps) => {
  const { text } = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType
  })

  return (
    <>
      <span>{text}</span>
      {cursor && <Cursor cursorStyle={cursorStyle} />}
    </>
  )
}
