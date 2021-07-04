import { useState, useCallback, useEffect, useRef } from 'react'

export interface TypewriterProps {
  words: string[]
  loop?: number | boolean
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
  onLoopDone?: () => void
}

export const useTypewriter = ({
  words = ['Hello', 'World', 'This', 'is', 'Typewriter'],
  loop = 1,
  typeSpeed = 20,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone
}: TypewriterProps): string => {
  // Stats
  const [speed, setSpeed] = useState(typeSpeed)
  const [text, setText] = useState('')
  // Refs
  const count = useRef(0)
  const loops = useRef(0)
  const isDelete = useRef(false)
  const isDone = useRef(false)

  const handleTyping = useCallback(() => {
    setSpeed(typeSpeed)

    const index = count.current % words.length
    const word = words[index]

    if (isDelete.current) {
      setText((prev) => word.substring(0, prev.length - 1))

      if (text === '') {
        isDelete.current = false
        setSpeed(deleteSpeed)
        count.current += 1
      }
    } else {
      setText((prev) => word.substring(0, prev.length + 1))

      if (text === word) {
        loops.current += 1
        isDelete.current = true
        setSpeed(delaySpeed)

        if (loops.current / words.length === loop) {
          isDone.current = true
          loop > 0 && onLoopDone && onLoopDone()
        }
      }
    }
  }, [delaySpeed, deleteSpeed, loop, text, typeSpeed, words, onLoopDone])

  useEffect(() => {
    const typing = setTimeout(handleTyping, speed)

    if (isDone.current) clearTimeout(typing)

    return () => clearTimeout(typing)
  }, [handleTyping, speed])

  return text
}
