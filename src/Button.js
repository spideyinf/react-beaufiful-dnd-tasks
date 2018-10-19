import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { bg, padding, children } = this.props
    return <button style={{ backgroundColor: bg, padding }}>{children}</button>
  }
}

export default Button
