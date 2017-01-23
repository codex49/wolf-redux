import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ColorPicker from './ColorPicker'
import { changeSize, changeBgColor, changeFgColor, changeRotate } from './actions'

class Sidebar extends Component {

  static propTypes ={
    bgColor: PropTypes.string.isRequired,
    fgColor: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }

  renderButtons () {
    const sizes = [16, 32, 64, 128, 256, 512]
    return sizes.map(s => <button className={ this.props.size === s ? 'active' : '' }
        onClick={ () => this.props.changeSize(s) } key={s}>{s}</button>)
  }

  render() {
    const { bgColor, fgColor, changeBgColor, changeFgColor, changeRotate } = this.props

    return (
      <div className="Sidebar">
        <div>
          <h2>Background</h2>
          <ColorPicker color={bgColor} handleChange={changeBgColor} />
        </div>

        <div>
          <h2>Foreground</h2>
          <ColorPicker color={fgColor} handleChange={changeFgColor} />

          <button onClick={() => changeRotate(45)}>+45</button>
          <button onClick={() => changeRotate(-45)}>-45</button>
        </div>
        <div>
          <h2>Sizes</h2>
          <div>{this.renderButtons()}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bgColor, fgColor, size, rotate })=>
  ({ bgColor, fgColor, size, rotate })

const mapActionsToProp = { changeSize, changeBgColor, changeFgColor, changeRotate }

export default connect(mapStateToProps, mapActionsToProp)(Sidebar)
