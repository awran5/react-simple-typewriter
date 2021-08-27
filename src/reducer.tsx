type State = {
  mainSpeed: number
  text: string
}

type Action =
  | { type: 'speed'; payload: number }
  | { type: 'type'; payload: string; speed: number }
  | { type: 'delete'; payload: string; speed: number }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'speed':
      return {
        ...state,
        mainSpeed: action.payload
      }
    case 'type':
      return {
        mainSpeed: action.speed,
        text: action.payload.substring(0, state.text.length + 1)
      }
    case 'delete':
      return {
        ...state,
        mainSpeed: action.speed,
        text: action.payload.substring(0, state.text.length - 1)
      }
    default:
      return state
  }
}
