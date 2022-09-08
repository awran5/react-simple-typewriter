export type State = {
  speed: number
  text: string
  isDeleting: boolean
  count: number
}

export type Action =
  | { type: 'SPEED'; payload: number }
  | { type: 'TYPE'; payload: string; speed: number }
  | { type: 'DELETE'; payload: string; speed: number }
  | { type: 'COUNT' }

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SPEED':
      return {
        ...state,
        isDeleting: true,
        speed: action.payload
      }
    case 'TYPE':
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length + 1)
      }
    case 'DELETE':
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length - 1)
      }
    case 'COUNT':
      return {
        ...state,
        isDeleting: false,
        count: state.count + 1
      }
    default:
      return state
  }
}
