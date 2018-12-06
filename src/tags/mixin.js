import { observe } from 'dob'
import ui, * as uiAction from '../state/ui'

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
