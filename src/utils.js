import { withInfo } from '@storybook/addon-info'

const styles = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '22px',
      display: 'inline',
      color: 'red',
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: 'orange',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0 8px',
    lineHeight: '2',
    fontSize: '14px',
  },
}

export const wInfo = text =>
  withInfo({
    inline: true,
    source: true,
    propTables: false,
    styles,
    text,
  })
