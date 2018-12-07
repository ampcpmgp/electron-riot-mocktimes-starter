import mock from 'am-mocktimes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as uiAction from '../src/states/ui'
import Path from '../src/const/path'

const mockAdapter = new MockAdapter(axios, { delayResponse: 500 })
mockAdapter.onGet(Path.TEST).reply(200, {
  successed: true
})

mock({
  uiAction,

  page (name) {
    window.history.replaceState(null, null, `#${name}`)
  }
})

require('../src/app') // for hot reload
