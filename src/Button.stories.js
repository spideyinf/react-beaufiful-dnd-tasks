import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .addWithJSX('with background',
  withInfo({
    styles: {
      header: {
        h1: {
          color: 'orange',
        }
      }
    },
    text: `
      Description goes here!!!!
    `
  })
  )(() => (
    <Button bg="palegoldenrod" padding="8px 12px">
      HELLO WORLD
      </Button>
  ))
  .addWithJSX('with background 2', () => (
    <Button bg="goldenrod" padding="12px 22px">
      HALLOWEEN
    </Button>
  ))
