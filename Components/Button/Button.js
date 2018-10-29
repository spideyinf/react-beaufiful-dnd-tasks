import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonWrapper } from './Button.style'

class Button extends Component {
  render() {
    const { bg, padding, children, className } = this.props
    return <ButtonWrapper style={{ backgroundColor: bg, padding }}>{children}</ButtonWrapper>
  }
}

Button.defaultProps = {
  children: null,
}

Button.propTypes = {
  bg: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node,
}

export default Button
