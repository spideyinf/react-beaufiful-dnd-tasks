import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import infoAddon, { setDefaults } from '@storybook/addon-info'

setAddon(infoAddon)
const req = require.context('../Components', true, /.stories.js$/)

setOptions({
  name: 'Test',
  url: 'https://framgia.com',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
})

setDefaults({
  inline: true,
  header: false,
  source: true,
  styles: stylesheet => {
    stylesheet.infoBody = {
      infoBody: {
        padding: '10px',
      },
    }
    return stylesheet
  },
  maxPropsIntoLine: 1,
})

function loadStories() {
  require('./welcomeStory.js')
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
