# React Typewriter Effect

A simple react component for adding a nice typewriter effect to your project.

![screenshot](./screenshot.gif)

### Installation

```
# npm
npm i react-simple-typewriter

# yarn
yarn add react-simple-typewriter

```

### Dependencies

- none

### Usage

```jsx
import React from "react"
import Typewriter from "react-simple-typewriter"
import "react-typewriting-effect/dist/index.css"

export default function App() {
  return (
    <div className="App">
      <h1 style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}>
        Life is simple{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["Eat", "Sleep", "Code", "Repeat!"]}
          />
        </span>
      </h1>
    </div>
  )
}
```

### Available Props

| Prop          | Type    | Description                                     | Default |
| ------------- | ------- | ----------------------------------------------- | :-----: |
| `loop`        | Boolean | Repeat the typing effect (true if present)      | `false` |
| `cursor`      | Boolean | Show / Hide cursor (show if present)            | `false` |
| `cursorStyle` | String  | Change the cursor style                         |  `\|`   |
| `typeSpeed`   | Integer | Speed in Milliseconds                           |  `100`  |
| `deleteSpeed` | Integer | Word deleting speed in Milliseconds             |  `50`   |
| `delaySpeed`  | Integer | Delay after the word is written in Milliseconds | `1500`  |
| `words`       | Array   | Array of strings holding the words              |    -    |

### [Demo](https://react-simple-typewriter.vercel.app/)

### [codeSandbox](https://codesandbox.io/s/react-typewriting-effect-8ulgs)
