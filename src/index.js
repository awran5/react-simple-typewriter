import React, { useState, useEffect, useCallback, memo, useRef } from 'react'
import PropTypes from 'prop-types'

function Typewriter({
  loop,
  typeSpeed,
  deleteSpeed,
  delaySpeed,
  words,
  cursor,
  cursorStyle
}) {
  // State
  const [speed, setSpeed] = useState(100)
  const [text, setText] = useState('')
  // Refs
  const isDeleting = useRef(false)
  const counter = useRef(0)

  const handleTyping = useCallback(() => {
    const index = loop ? counter.current % words.length : counter.current
    const word = words[index]
    setSpeed(typeSpeed)

    if (isDeleting.current) {
      // Set stoping speed
      setSpeed(deleteSpeed)
      // Move backwards
      setText((prev) => word.substring(0, prev.length - 1))
      // Move to the next word when text is empty
      if (text === '') {
        isDeleting.current = false
        counter.current = counter.current + 1
      }
    } else {
      // Move Forward
      setText((prev) => word.substring(0, prev.length + 1))
      // Word is completed
      if (text === word) {
        // if not loop just return
        if (!loop) return
        // else set the speed delay and start over
        setSpeed(delaySpeed)
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
      {cursor && <span className='blinking-cursor'>{cursorStyle}</span>}
    </React.Fragment>
  )
}

Typewriter.propTypes = {
  typeSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  delaySpeed: PropTypes.number,
  words: PropTypes.array.isRequired,
  cursorStyle: PropTypes.string,
  cursor: PropTypes.bool,
  loop: PropTypes.bool
}

Typewriter.defaultProps = {
  typeSpeed: 100,
  deleteSpeed: 50,
  delaySpeed: 1500,
  words: ['Eat', 'Sleep', 'Code', 'Repeat!'],
  cursorStyle: '|',
  cursor: false,
  loop: false
}

export default memo(Typewriter)
