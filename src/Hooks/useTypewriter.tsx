import { useCallback, useEffect, useRef, useReducer } from 'react'
import { reducer } from '../reducer'

export interface TypewriterProps {
  words: string[]
  loop?: number | boolean
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
  onLoopDone?: () => void
  onType?: (counter: number) => void
}

export const useTypewriter = ({
  words = ['Hello', 'World', 'This', 'is', 'Typewriter', 'Hook'],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType
}: TypewriterProps) => {
  const [{ mainSpeed, text }, dispatch] = useReducer(reducer, {
    mainSpeed: 0,
    text: ''
  })

  // Refs
  const count = useRef(0)
  const loops = useRef(0)
  const isDelete = useRef(false)
  const isDone = useRef(false)

  const handleTyping = useCallback(() => {
    const index = count.current % words.length
    const word = words[index]

    dispatch({ type: 'speed', payload: typeSpeed })

    if (isDelete.current) {
      dispatch({ type: 'delete', payload: word, speed: deleteSpeed })

      if (text === '') {
        isDelete.current = false
        count.current += 1
      }
    } else {
      dispatch({ type: 'type', payload: word, speed: typeSpeed })

      if (onType) onType(count.current)

      if (text === word) {
        dispatch({ type: 'speed', payload: delaySpeed })
        isDelete.current = true

        if (loop > 0) {
          loops.current += 1
          if (loops.current / words.length === loop) isDone.current = true
        }
      }
    }
  }, [delaySpeed, deleteSpeed, loop, typeSpeed, words, text, onType])

  useEffect(() => {
    const typing = setTimeout(handleTyping, mainSpeed)

    if (isDone.current) {
      clearTimeout(typing)
      if (onLoopDone) onLoopDone()
    }

    return () => clearTimeout(typing)
  }, [handleTyping, mainSpeed, onLoopDone])

  return { text, count: count.current }
}
