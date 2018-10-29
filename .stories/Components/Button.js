import React from 'react'
import { text, selectV2 as select, object } from '@storybook/addon-knobs'
import Button from '../../Components/Button/Button'

const bgOptions = {
  red: 'red',
  palegoldenrod: 'palegoldenrod',
  goldenrod: 'goldenrod',
}

const component = () => (
  <Button
    bg={select('Background', bgOptions, 'palegoldenrod')}
    padding="8px 16px"
    className={text('ClassName', '')}
    style={object('Style', {})}
    children={text('Label', 'HELLO WORLD')}
  />
)

export default component
