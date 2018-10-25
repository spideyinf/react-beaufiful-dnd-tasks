import React, { Component } from 'react'

import { ButtonWrapper } from './Button.style'

class Button extends Component {
  render() {
    const { bg, padding, children } = this.props
    return <ButtonWrapper style={{ backgroundColor: bg, padding }}>{children}</ButtonWrapper>
  }
}

export default Button
