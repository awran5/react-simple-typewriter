import { useRef } from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-smiple-typewriter'

const App = () => {
  const handleDone = () => {
    console.log('done from typewriter component')
  }

  const countRef = useRef(0)
  const { text, count } = useTypewriter({
    words: ['This', 'is', 'Typewriter', 'From', 'Hook'],
    loop: 2,
    typeSpeed: 20,
    delaySpeed: 1500,
    deleteSpeed: 50,
    onLoopDone: () => console.log('done from typewriter hook')
  })

  return (
    <div style={{ padding: 20 }}>
      <p>The default component</p>

      <Typewriter
        cursor
        words={['This', 'is', 'Typewriter', 'From', 'Component']}
        typeSpeed={10}
        onLoopDone={handleDone}
        countRef={countRef}
      />
      <br />
      word count: <span>{countRef.current}</span>
      <hr />

      <p>A simple custom typewriter built with the hook!</p>

      <div>
        <span>{text}</span>
        <Cursor />
        <br />
        word count: <span>{count}</span>
      </div>
    </div>
  )
}

export default App
