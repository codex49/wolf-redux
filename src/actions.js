// action creators

export const changeSize = (size) =>
  ({ type: 'CHANGE_SIZE', payload: { size } })

export const changeBgColor = (color) =>
  ({ type: 'CHANGE_BG_COLOR', payload: { color } })

export const changeFgColor = (color) =>
  ({ type: 'CHANGE_FG_COLOR', payload: { color } })

export const changeRotate = (rotate) =>
  ({ type: 'CHANGE_ROTATE', payload: { rotate } })
