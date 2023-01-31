const { BrowserWindow, app } = require("electron");

const createLaunchWindow = () => {
    let win = new BrowserWindow({
        height: 450,
        width: 450
    });

    win.removeMenu();
    win.loadFile("./launch.html");
    setTimeout(() => {
        createMainWindow();
        win.close();
    }, 1250);
}

const createMainWindow = () => {
    let win = new BrowserWindow({
        title: "da coolest mlp player in the world",
        titleBarOverlay: false,
        icon: "./icon.png",
        height: 800,
        width: 1350
    });

    win.removeMenu();
    win.loadURL("https://twitch.tv");
}

app.whenReady().then(() => {
    createLaunchWindow();
})