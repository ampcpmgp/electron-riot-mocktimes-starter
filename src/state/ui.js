import { observable, Action } from 'dob'

const state = observable({
  clickCount: 0
})

export const addCount = () =>
  Action(() => {
    ++state.clickCount
  })

export default state
