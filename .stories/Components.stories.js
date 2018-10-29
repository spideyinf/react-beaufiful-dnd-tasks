import React from 'react'
import { wInfo } from '../src/utils'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Button from './Components/Button'
import Input from './Components/Input'

const stories = storiesOf('Components', module)

stories
  .addDecorator((story, context) => wInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('Button', Button)
  .add('Input', Input)
// Stories are kept being updated from here
