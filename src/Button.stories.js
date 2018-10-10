import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
  .add('with background', () => <Button bg="palegoldenrod">HELLO WORLD</Button>)
  .add('with background 2', () => <Button bg="goldenrod">Hi there!</Button>)
