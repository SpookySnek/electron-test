const { ElectronBlocker } = require('@cliqz/adblocker-electron')
const fetch = require('cross-fetch')
const { app, BrowserWindow } = require('electron')



app.on('ready', () => {
    ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
        blocker.enableBlockingInSession(session.defaultSession);
      });
      
    const mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});

    mainWindow.loadURL('https://www.youtube.com/tv')
});