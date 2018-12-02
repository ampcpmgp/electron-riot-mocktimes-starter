import { observable, Action } from 'dob'

const state = observable({
  clickCount: 0,
  clickHistory: []
})

export const addCount = () => Action(() => {
  ++state.clickCount
  state.clickHistory.push(1)
})

export default state
