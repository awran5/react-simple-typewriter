'use client'

import { TypewriterProps, useTypewriter } from '../hooks/useTypewriter'
import { Cursor, CursorProps } from './Cursor'

type ComponentProps = {
  /** Show / Hide the cursor */
  cursor?: boolean
} & TypewriterProps &
  CursorProps

/**
 * A Simple React Component for adding a nice Typewriter effect to your project.
 */
export const Typewriter = ({
  words = ['Hello World!', 'This is', 'a simple Typewriter'],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  cursor = false,
  cursorStyle = '|',
  cursorColor = 'inherit',
  cursorBlinking = true,
  startFrom = 'empty',
  onLoopDone,
  onType,
  onDelay,
  onDelete
}: ComponentProps): JSX.Element => {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    startFrom,
    onLoopDone,
    onType,
    onDelay,
    onDelete
  })

  return (
    <>
      <span>{text}</span>
      {cursor && (
        <Cursor
          cursorStyle={cursorStyle}
          cursorColor={cursorColor}
          cursorBlinking={cursorBlinking}
        />
      )}
    </>
  )
}
