# React Simple Typewriter

> A simple react component for adding a nice typewriter effect to your project.

[![NPM](https://img.shields.io/npm/v/react-simple-typewriter.svg)](https://www.npmjs.com/package/react-simple-typewriter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-typewriter)![GitHub](https://img.shields.io/github/license/awran5/react-simple-typewriter)

<p align="center">
  <img src="./screenshot.gif" alt="screenshot" />
</p>
 
## Install

#### npm

```sh
npm i react-simple-typewriter
```

#### Yarn

```sh
yarn add react-simple-typewriter
```

---

## Usage

There are two ways to `Typewriter`:

## 1. Component

```jsx
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  return (
    <div className='App'>
      <Typewriter {/* Props */} />
    </div>
  )
}
```

### Component Props

| Prop             |       Type        | Options  | Description                                                                                |      Default       |
| ---------------- | :---------------: | -------- | ------------------------------------------------------------------------------------------ | :----------------: |
| `words`          |       array       | Required | Array of strings holding the words                                                         | `['Hello', '...']` |
| `typeSpeed`      |      number       | Optional | Character typing speed in Milliseconds                                                     |        `80`        |
| `deleteSpeed`    |      number       | Optional | Character deleting speed in Milliseconds                                                   |        `50`        |
| `delaySpeed`     |      number       | Optional | Delay time between the words in Milliseconds                                               |       `1500`       |
| `loop`           | number \| boolean | Optional | Control how many times to run. `0 \| false` to run infinitely                              |        `1`         |
| `cursor`         |      boolean      | Optional | Show / Hide a cursor                                                                       |      `false`       |
| `cursorStyle`    |     ReactNode     | Optional | Change the cursor style available if `cursor` is `enabled`                                 |        `\|`        |
| `cursorBlinking` |      boolean      | Optional | Enable cursor blinking animation                                                           |        `\|`        |
| `onLoopDone`     |     function      | Optional | Callback function that is triggered when loops are completed. available if `loop` is `> 0` |        `-`         |
| `onType`         |     function      | Optional | Callback function that is triggered while typing with typed words `count` passed           |        `-`         |
| `onDelay`        |     function      | Optional | Callback function that is triggered on typing delay                                        |        `-`         |
| `onDelete`       |     function      | Optional | Callback function that is triggered while deleting                                         |        `-`         |

---

### Usage Example

```jsx
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MyComponent = () => {

  const handleType = (count: number) => {
    // access word count number
    console.log(count)}
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='App'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
}
```

## 2. Hook

**BREAKING CHANGES v5.0.0** Hook now returns `text` along with some useful `flags`:

| Prop       |  Type   | Description                         |
| ---------- | :-----: | ----------------------------------- |
| `isType`   | boolean | Check if currently typing           |
| `isDelete` | boolean | Check if currently deleting         |
| `isDelay`  | boolean | Check if currently on delay         |
| `isDone`   | boolean | Check if all running loops are done |

```jsx
import { useTypewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  /**
   * @returns
   * text: [string] typed text
   * NEW helper: {} helper flags
   */
  const [text, helper] = useTypewriter({
    /* Config */
  })

  /* Hook helper */
  const { isType, isDelete, isDelay, isDone } = helper

  return (
    <div className='App'>
      <span>{text}</span>
    </div>
  )
}
```

### Hook Config

| Prop          |       Type        | Options  | Description                                                                                |      Default       |
| ------------- | :---------------: | -------- | ------------------------------------------------------------------------------------------ | :----------------: |
| `words`       |       array       | Required | Array of strings holding the words                                                         | `['Hello', '...']` |
| `typeSpeed`   |      number       | Optional | Character typing speed in Milliseconds                                                     |        `80`        |
| `deleteSpeed` |      number       | Optional | Character deleting speed in Milliseconds                                                   |        `50`        |
| `delaySpeed`  |      number       | Optional | Delay time between the words in Milliseconds                                               |       `1500`       |
| `loop`        | number \| boolean | Optional | Control how many times to run. `0 \| false` to run infinitely                              |        `1`         |
| `onLoopDone`  |     function      | Optional | Callback function that is triggered when loops are completed. available if `loop` is `> 0` |        `-`         |
| `onType`      |     function      | Optional | Callback function that is triggered while typing                                           |        `-`         |
| `onDelete`    |     function      | Optional | Callback function that is triggered while deleting                                         |        `-`         |
| `onDelay`     |     function      | Optional | Callback function that is triggered on typing delay                                        |        `-`         |

### Hook Usage Example

```jsx
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    loop: 0
  })

  return (
    <div className='App'>
      <span>{text}</span>
    </div>
  )
}
```

### Hook with Cursor

If you like to have the **Cursor** effect, you can `import` it as a separate `Component`

```jsx
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className='App'>
      <span>{text}</span>
      <Cursor cursorColor='red' />
    </div>
  )
}
```

### Cursor Component Props

| Prop             |   Type    | Options  | Description                       |  Default  |
| ---------------- | :-------: | -------- | --------------------------------- | :-------: |
| `cursorStyle`    | ReactNode | Optional | Change cursor style               |   `\|`    |
| `cursorColor`    |  String   | Optional | Change cursor color               | `inherit` |
| `cursorBlinking` |  Boolean  | Optional | disable cursor blinking animation |  `true`   |

---

### [Demo](https://react-simple-typewriter.vercel.app/)

<br />

[![Edit react-simple-typewriter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-simple-typewriter-uj8ix)

### License

MIT © [awran5](https://github.com/awran5/)
