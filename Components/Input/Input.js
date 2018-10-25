import React, { Component } from 'react'

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

export default Input
