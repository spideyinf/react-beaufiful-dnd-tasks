import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  render() {
    const { type, label, placeholder } = this.props
    return (
      <div>
        {label}
        <input type={type} placeholder={placeholder} />
      </div>
    )
  }
}

Input.defaultProps = {
  placeholder: null,
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
