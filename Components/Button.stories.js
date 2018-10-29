import React from 'react'
import { wInfo } from '../src/utils'
import { storiesOf } from '@storybook/react'
import Button from './Button/Button'

const stories = storiesOf('01.Button', module)

stories
  .add(
    'primary',
    wInfo(`
      Description goes here!
    `)(() => (
      <Button bg="palegoldenrod" padding="8px 16px">
        HELLO WORLD
      </Button>
    )),
  )
  .add(
    'secondary',
    wInfo(`
    This is the demo Button
  `)(() => (
      <Button bg="goldenrod" padding="12px 22px">
        HALLOWEEN
      </Button>
    )),
  )
