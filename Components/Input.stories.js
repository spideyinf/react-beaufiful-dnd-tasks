import React from 'react'
import { wInfo } from '../src/utils'
import { storiesOf } from '@storybook/react'
import Input from './Input/Input'

storiesOf('Input', module)
  .add(
    'input1',
    wInfo(`
      Description goes here!
    `)(() => (
      <Input type="text" placeholder="This is input type 1">
        HELLO WORLD
      </Input>
    )),
  )
  .add('input2', () => (
    <Input type="password" placeholder="This is input type 2">
      HALLOWEEN
    </Input>
  ))
