import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { bg, children } = this.props
    return <button style={{ backgroundColor: bg }}>{children}</button>
  }
}

export default Button
