import { injectGlobal } from 'styled-components'
import '@atlaskit/css-reset'

injectGlobal`
  body {
    font-family: 'Helvetica', 'Hiragino Kaku Gothic Pro', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', メイリオ, 'MS Pゴシック', 'ＭＳ ゴシック', 'YuGothic', Meiryo, sans-serif;
  }

  .test {
    color: '#FF7F50',
    background-color: '#4C2618',
  }
`
