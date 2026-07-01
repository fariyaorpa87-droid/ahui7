
const {app,BrowserWindow}=require('electron');
const path=require('path');

function create(){
const win=new BrowserWindow({
width:1700,
height:980,
icon:path.join(__dirname,'assets/icon.ico'),
webPreferences:{
webviewTag:true,
nodeIntegration:true,
contextIsolation:false
}
});

win.loadFile('index.html');
}

app.whenReady().then(create);
