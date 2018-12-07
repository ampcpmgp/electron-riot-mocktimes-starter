import { observe } from 'dob'
import ui, * as uiAction from '../states/ui'

export default {
  // static
  ui,
  uiAction,

  init () {
    const signal = observe(() => {
      void ui.clickCount

      this.update()
    })

    this.on('unmount', () => {
      signal.unobserve()
    })
  }
}
