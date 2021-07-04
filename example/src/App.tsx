import { Typewriter, useTypewriter, Cursor } from 'react-smiple-typewriter'

const App = () => {
  const handleDone = () => {
    console.log('done from typewriter component')
  }

  const text = useTypewriter({
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
      />
      <hr />

      <p>A simple custom typewriter built with the hook!</p>

      <div>
        <span>{text}</span>
        <Cursor />
      </div>
    </div>
  )
}

export default App
