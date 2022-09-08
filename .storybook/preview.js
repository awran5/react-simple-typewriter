export const parameters = {
  options: {
    storySort: {
      order: ['Introduction', 'Changelog']
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#eeeeee'
      },
      {
        name: 'dark',
        value: '#a1a1a1'
      }
    ]
  }
}
