import store from './model'
import { changeSize } from './actions'

//fetch('http://perdu.com').then(res => console.log(res), (err) => console.error(err))

export const getSize = () => {
  setTimeout(function () {
    store.dispatch(changeSize(600))
  }, 1000)
}