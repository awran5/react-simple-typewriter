import React from 'react'

import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <h1
        style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
      >
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
          />
        </span>
      </h1>
      <div style={{ marginBottom: 20, fontSize: '.75rem' }}>
        <a
          title='github'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/awran5/React-Typewriting-effect'
        >
          <svg>
            <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App
