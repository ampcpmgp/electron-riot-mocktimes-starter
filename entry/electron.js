const electron = require('electron')

const { app, BrowserWindow } = electron

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

let mainWindow

function createWindow () {
  if (mainWindow) return

  mainWindow = new BrowserWindow({
    x: 10,
    y: 100,
    width: 1000,
    height: 920,
    'node-integration': false
  })

  const url = (function () {
    if (process.env.NODE_ENV === 'develop') {
      return `http://${require('ip').address()}:1234/pattern.html`
    } else {
      return 'dist/index.html'
    }
  })()

  if (process.env.NODE_ENV === 'develop') {
    process.chdir('./entry')
  }

  mainWindow.loadURL(url)

  mainWindow.on('app-command', function (e, cmd) {
    if (cmd === 'browser-backward' && mainWindow.webContents.canGoBack()) {
      mainWindow.webContents.goToIndex(0)
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
app.on('activate', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
