import { withInfo } from '@storybook/addon-info'

const fontFamily =
  "'Helvetica', 'Hiragino Kaku Gothic Pro', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', メイリオ, 'MS Pゴシック', 'ＭＳ ゴシック', 'YuGothic', Meiryo, sans-serif"

const styles = {
  infoStory: {
    margin: '42px 0',
  },
  infoBody: {
    fontFamily,
    borderWidth: 0,
    backgroundColor: '#fff',
    boxShadow: 'none',
    padding: '0 12px',
    fontSize: '14px',
  },
  infoContent: {
    fontFamily,
    marginBottom: '12px',
  },
  source: {
    h1: {
      fontSize: '24px',
    },
  },
}

export const wInfo = text =>
  withInfo({
    header: false,
    inline: true,
    source: true,
    propTables: false,
    styles,
    text,
  })
