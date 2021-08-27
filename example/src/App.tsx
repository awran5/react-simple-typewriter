import { useState } from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-smiple-typewriter'

const TypewriterHook = () => {
  const { text, count } = useTypewriter({
    words: ['Hello', 'World', 'This', 'is', 'Typewriter', 'Hook'],
    loop: 2,
    // typeSpeed: 20,
    onLoopDone: () => console.log('done from typewriter hook')
  })

  return (
    <div>
      <span>{text}</span>
      <Cursor />
      <hr />
      <div>count: {count}</div>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0)
  const handleDone = () => {
    console.log('done from typewriter component')
  }
  const handleType = (counter: number) => {
    setCount(counter)
    console.log('this function run every type on Component')
  }

  return (
    <div style={{ padding: 20 }}>
      <p>The default component</p>

      <Typewriter
        words={['Hello', 'World', 'This', 'is', 'Typewriter', 'Component']}
        loop={1}
        // typeSpeed={40}
        cursor
        onLoopDone={handleDone}
        onType={handleType}
      />
      <hr />
      <div>count: {count}</div>
      <p>A simple custom typewriter built with the hook!</p>

      <TypewriterHook />
    </div>
  )
}

export default App
