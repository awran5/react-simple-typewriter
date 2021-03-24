import React from 'react'

import Typewriter, { useTypewriter } from 'react-smiple-typewriter'
import 'react-smiple-typewriter/dist/index.css'

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <p>The default component</p>
      <Typewriter words={['hi', 'world']} cursor loop />

      <hr />

      <p>A simple custom typewriter built with the hook!</p>
      <CustomSimpleTypewriter />
    </div>
  )
}

const CustomSimpleTypewriter = () => {
  const text = useTypewriter({ words: ['i', 'use', 'hooks!'], loop: true })
  return <span>{text}</span>
}

export default App
