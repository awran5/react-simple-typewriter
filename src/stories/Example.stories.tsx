import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typewriter } from '..'

export default {
  title: 'Examples/Typewriter',
  component: Typewriter
} as ComponentMeta<typeof Typewriter>

const Template: ComponentStory<typeof Typewriter> = (args) => (
  <h3>
    <Typewriter {...args} />
  </h3>
)

export const Example = Template.bind({})
Example.args = {
  words: [
    'Hello World',
    'Welcome to',
    'React Simple Typewriter',
    'A Simple React Component/Hook for adding a nice Typewriter effect to your project.'
  ],
  loop: 0,
  delaySpeed: 1000,
  deleteSpeed: 25,
  typeSpeed: 75,
  cursor: true,
  onType: undefined,
  onDelay: undefined,
  onDelete: undefined,
  onLoopDone: undefined,
  cursorBlinking: true
}
