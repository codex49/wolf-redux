import { createStore } from 'redux'

var initialState = {
  bgColor: 'black',
  fgColor: 'red',
  size: 512,
  rotate: 0
}

var reducer = function (state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_SIZE':
      return { ...state, size: payload.size }

    case 'CHANGE_ROTATE':
      return { ...state, rotate: state.rotate + payload.rotate }

    case 'CHANGE_BG_COLOR':
      return { ...state, bgColor: payload.color.hex }

    case 'CHANGE_FG_COLOR':
      return { ...state, fgColor: payload.color.hex }

    default:
      return state
  }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

