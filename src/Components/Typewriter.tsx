import { Cursor } from './Cursor'
import { TypewriterProps, useTypewriter } from '../Hooks/useTypewriter'

interface ComponentProps extends TypewriterProps {
  /** Show / Hide the cursor */
  cursor?: boolean
  /** Change the cursor style available if cursor is enabled */
  cursorStyle?: string
  /** Change the cursor Color */
  cursorColor?: string
}
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
  onLoopDone,
  onType
}: ComponentProps): JSX.Element => {
  const [text] = useTypewriter({
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
      {cursor && <Cursor cursorStyle={cursorStyle} cursorColor={cursorColor} />}
    </>
  )
}
