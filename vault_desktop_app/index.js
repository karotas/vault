const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    



   resizable:false,
    icon:__dirname+"/assets/logos.png",
   
  });


mainWindow.loadURL("http://localhost:4000/user/login")



};


app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

