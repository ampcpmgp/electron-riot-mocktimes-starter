import { mount, storiesOf } from '@storybook/riot'
import { withKnobs, number } from '@storybook/addon-knobs'
import './index.tag'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('normal', () =>
    mount('parts-header', {
      testData: number('testData', 4)
    })
  )
