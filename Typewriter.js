import React, { useState, useEffect, useCallback, memo, useRef } from "react"

export default memo(function Typewriter({ loop, typeSpeed, deleteSpeed, delaySpeed, words, cursor, blinkingCursor }) {
  // State
  const [speed, setSpeed] = useState(100)
  const [text, setText] = useState("")
  // Refs
  const isDeleting = useRef(false)
  const counter = useRef(0)

  const handleTyping = useCallback(() => {
    const index = loop ? counter.current % words.length : counter.current
    const word = words[index]
    setSpeed(typeSpeed || 100)

    if (isDeleting.current) {
      // Set stoping speed
      setSpeed(deleteSpeed || 50)
      // Move backwards
      setText(prev => word.substring(0, prev.length - 1))
      // Move to the next word when text is empty
      if (text === "") {
        isDeleting.current = false
        counter.current = counter.current + 1
      }
    } else {
      // Move Forward
      setText(prev => word.substring(0, prev.length + 1))
      // Word is completed
      if (text === word) {
        // if not loop just return
        if (!loop) return
        // else set the speed delay and start over
        setSpeed(delaySpeed || 1500)
        isDeleting.current = true
      }
    }
  }, [delaySpeed, deleteSpeed, loop, text, typeSpeed, words])

  useEffect(() => {
    const timer = setTimeout(() => handleTyping(), speed)
    return () => clearTimeout(timer)
  }, [handleTyping, speed])

  return (
    <React.Fragment>
      <span>{text}</span>
      {cursor && <span className="blinking-cursor">{blinkingCursor || "|"}</span>}
    </React.Fragment>
  )
})
