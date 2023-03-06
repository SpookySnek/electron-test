const { ElectronBlocker } = require('@cliqz/adblocker-electron')
const fetch = require('cross-fetch')
const { app, BrowserWindow, session } = require('electron')
//iTunes-AppleTV/4.1
//'Mozilla/5.0 (Linux; Tizen 2.3) AppleWebKit/538.1 (KHTML, like Gecko)Version/2.3 TV Safari/538.1'
const SMART_TV_UA = 'Mozilla/5.0 (Linux; Tizen 2.3)';
const filter = {
    urls: ['*://*.youtube.com/*']
  }


app.on('ready', () => {
    ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
        blocker.enableBlockingInSession(session.defaultSession);
      });

      session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
        details.requestHeaders['User-Agent'] = SMART_TV_UA;
        callback({ requestHeaders: details.requestHeaders })
      });

    const mainWindow = new BrowserWindow({width: 1920, height: 1080, frame: false, autoHideMenuBar: true});

    mainWindow.loadURL('https://www.youtube.com/tv')

});

app.allowRendererProcessReuse = true;
app.userAgentFallback = SMART_TV_UA;