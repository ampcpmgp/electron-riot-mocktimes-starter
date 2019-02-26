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

  mainWindow.on('app-command', function (e, cmd) {
    console.log(3, cmd) // v4 not fired, v3 fired.
  })

  console.log(1)
  await (ms => new Promise(resolve => setTimeout(resolve, ms)))(10000)
  console.log(2)

  if (process.env.NODE_ENV === 'develop') {
    const url = `http://${require('ip').address()}:1234/pattern.html`

    process.chdir('./entry')
    mainWindow.loadURL(url)
  }

  if (process.env.NODE_ENV !== 'develop') {
    const url = path.join(__dirname, 'dist/index.html')

    process.chdir(__dirname)
    mainWindow.loadURL(url)
  }

  mainWindow.on('app-command', function (e, cmd) {
    console.log(cmd)

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
