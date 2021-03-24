import React, { useState, useEffect, useCallback, memo } from 'react'
import styles from './styles.module.css'

interface TypewriterConfig {
  words: string[]
  loop?: boolean
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

interface TypewriterProps extends TypewriterConfig {
  cursor?: boolean
  cursorStyle?: string
}

export const useTypewriter = (config: TypewriterConfig): string => {
  const {
    words,
    typeSpeed = 100,
    loop = false,
    deleteSpeed = 50,
    delaySpeed = 1500
  } = config

  // State
  const [speed, setSpeed] = useState<number>(typeSpeed)
  const [text, setText] = useState<string>('')
  const [isDeleting, setDeleting] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)

  const handleTyping = useCallback(() => {
    const index: number = loop ? counter % words.length : counter
    const word: string = words[index]

    setSpeed(typeSpeed)

    if (isDeleting) {
      // Set stoping speed
      setSpeed(deleteSpeed)
      setText((prev) => word.substring(0, prev.length - 1))
    } else {
      setText((prev) => word.substring(0, prev.length + 1))
    }

    if (!isDeleting && text === word) {
      // done!
      if (!loop && counter >= words.length - 1) {
        return
      }

      setDeleting(true)
      setSpeed(delaySpeed)
    } else if (isDeleting && text === '') {
      setDeleting(false)
      setCounter((prev) => prev + 1)
    }
  }, [
    delaySpeed,
    isDeleting,
    counter,
    deleteSpeed,
    loop,
    text,
    typeSpeed,
    words
  ])

  // Effect
  useEffect(() => {
    const timer = setTimeout(() => handleTyping(), speed)
    return () => clearTimeout(timer)
  }, [handleTyping, speed])

  return text
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  loop = false,
  cursor = false,
  cursorStyle = '|',
  typeSpeed = 100,
  delaySpeed = 1500,
  deleteSpeed = 50
}) => {
  const text = useTypewriter({
    words,
    loop,
    typeSpeed,
    delaySpeed,
    deleteSpeed
  })

  return (
    <React.Fragment>
      <span>{text}</span>
      {cursor && <span className={styles.blinkingCursor}>{cursorStyle}</span>}
    </React.Fragment>
  )
}

export default memo(Typewriter)
