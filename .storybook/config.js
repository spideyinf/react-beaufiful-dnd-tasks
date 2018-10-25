import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)
const req = require.context('../Components', true, /.stories.js$/)

function loadStories() {
  require('./welcomeStory.js')
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
