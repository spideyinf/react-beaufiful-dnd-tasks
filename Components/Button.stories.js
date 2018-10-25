import React from 'react'
import { wInfo } from '../src/utils'
import { storiesOf } from '@storybook/react'
import Button from './Button/Button'

storiesOf('Button', module)
  .addWithJSX(
    'primary',
    wInfo(`
      Description goes here!
    `)(() => (
      <Button bg="palegoldenrod" padding="8px 16px">
        HELLO WORLD
      </Button>
    )),
  )
  .addWithJSX('secondary', () => (
    <Button bg="goldenrod" padding="12px 22px">
      HALLOWEEN
    </Button>
  ))
