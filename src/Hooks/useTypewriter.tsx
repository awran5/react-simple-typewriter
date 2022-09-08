import { useCallback, useEffect, useRef, useReducer } from 'react'
import { reducer } from '../reducer'

export interface TypewriterProps {
  /** Callback Function that is triggered when loops are completed. available if loop is > 0 */
  onLoopDone?: () => void
  /** Callback Function that is runs while typing */
  onType?: (counter: number) => void
  /** Array of strings holding the words */
  words: string[]
  /** Control how many times to run. `0 | false` to run infinitely */
  loop?: number | boolean
  /** Character typing speed in Milliseconds */
  typeSpeed?: number
  /** Character deleting speed in Milliseconds */
  deleteSpeed?: number
  /** Delay time between the words in Milliseconds */
  delaySpeed?: number
}

export const useTypewriter = ({
  words = ['Hello World!', 'This is', 'a simple Typewriter'],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType
}: TypewriterProps): (string | number)[] => {
  const [{ isDeleting, speed, text, count }, dispatch] = useReducer(reducer, {
    isDeleting: false,
    speed: typeSpeed,
    text: '',
    count: 0
  })

  // Refs
  const loops = useRef(0)
  const isDone = useRef(false)

  const handleTyping = useCallback(() => {
    const index = count % words.length
    const fullWord = words[index]

    if (!isDeleting) {
      dispatch({ type: 'TYPE', payload: fullWord, speed: typeSpeed })

      if (onType) onType(count)

      if (text === fullWord) {
        dispatch({ type: 'SPEED', payload: delaySpeed })

        if (loop > 0) {
          loops.current += 1
          if (loops.current / words.length === loop) isDone.current = true
        }
      }
    } else {
      dispatch({ type: 'DELETE', payload: fullWord, speed: deleteSpeed })

      if (text === '') dispatch({ type: 'COUNT' })
    }
  }, [
    isDeleting,
    count,
    delaySpeed,
    deleteSpeed,
    loop,
    typeSpeed,
    words,
    text,
    onType
  ])

  useEffect(() => {
    const typing = setTimeout(handleTyping, speed)

    if (isDone.current) {
      clearTimeout(typing)
      if (onLoopDone) onLoopDone()
    }

    return () => clearTimeout(typing)
  }, [handleTyping, speed, onLoopDone])

  return [text, count + 1]
}
