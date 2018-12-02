import { observe } from 'dob'
import ui, * as uiAction from '../../../state/ui'

export default {
  // static
  addCount: uiAction.addCount,

  init () {
    Object.assign(this, {
      // member
      clickCount: ui.clickCount,
      clickHistory: ui.clickHistory
    })
    
    const signal = observe(() => {
      this.update({
        clickCount: ui.clickCount
      })
    })

    this.on('unmount', () => {
      signal.unobserve()
    })
  }
}
