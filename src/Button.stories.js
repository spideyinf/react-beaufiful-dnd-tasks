import React from 'react'
import { wInfo } from './utils'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
      Description goes here!
    `)(() => (
      <Button bg="palegoldenrod" padding="8px 16px">
        HELLO WORLD
      </Button>
    )),
  )
  .addWithJSX('with background 2', () => (
    <Button bg="goldenrod" padding="12px 22px">
      HALLOWEEN
    </Button>
  ))
