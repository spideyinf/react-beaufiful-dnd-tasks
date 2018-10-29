import React from 'react'
import { wInfo } from '../src/utils'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { text, selectV2 as select, object } from '@storybook/addon-knobs'
import Button from './Button/Button'

const stories = storiesOf('01.Button', module)

const bgOptions = {
  red: 'red',
  palegoldenrod: 'palegoldenrod',
  goldenrod: 'goldenrod',
}

stories
  .addDecorator(withKnobs)
  .add(
    'primary',
    wInfo(`
      Description goes here!
    `)(() => (
      <Button
        bg={select('Background', bgOptions, 'palegoldenrod')}
        padding="8px 16px"
        className={text('ClassName', '')}
        style={object('Style', {})}
        children={text('Label', 'HELLO WORLD')}
      />
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
