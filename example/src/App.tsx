import React from 'react'

import Typewriter from 'react-smiple-typewriter'
import 'react-smiple-typewriter/dist/index.css'

const App = () => {
  return (
    <Typewriter
      words={['hi', 'world']}
      cursor
      loop
      onLoop={(loopCount) => console.log(`Just completed loop ${loopCount}`)}
    />
  )
}

export default App
