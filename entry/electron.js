const path = require('path')
const electron = require('electron')

const { app, BrowserWindow } = electron

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

async function createWindow () {
  let mainWindow = new BrowserWindow({
    x: 10,
    y: 100,
    width: 1000,
    height: 920,
    'node-integration': false
  })

  if (process.env.NODE_ENV === 'develop') {
    const waitOn = require('wait-on')
    const url = `http://${require('ip').address()}:1234/pattern.html`

    await waitOn({
      resources: [url]
    })

    process.chdir('./entry')
    mainWindow.loadURL(url)
  }

  if (process.env.NODE_ENV !== 'develop') {
    const url = path.join(__dirname, 'dist/index.html')

    process.chdir(__dirname)
    mainWindow.loadURL(url)
  }

  // 下記イベントが electron@4系で動かないため、3系にしている。対応され次第、versionを上げる。
  mainWindow.on('app-command', function (e, cmd) {
    if (cmd === 'browser-backward' && mainWindow.webContents.canGoBack()) {
      mainWindow.webContents.goBack()
    }
    if (cmd === 'browser-forward' && mainWindow.webContents.canGoForward()) {
      mainWindow.webContents.goForward()
    }
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
