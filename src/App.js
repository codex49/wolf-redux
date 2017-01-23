import React from 'react'
import './App.css'

import Canvas from './Canvas'
import Sidebar from './Sidebar'

export default () =>  (
  <div className="App">
    <Sidebar />
    <Canvas />
  </div>
)