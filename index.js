const { BrowserWindow, app, Menu } = require("electron");

const createLaunchWindow = () => {
    let win = new BrowserWindow({
        height: 450,
        width: 450,
        icon: "./icon.png",
        frame: false,
        resizable: false,
        fullscreenable: false
    });

    win.removeMenu();
    win.loadFile("./launch.html");
    setTimeout(() => {
        createMainWindow();
        win.close();
    }, 3000);
}

const createMainWindow = () => {
    let win = new BrowserWindow({
        title: "Twitch",
        icon: "./icon.png",
        height: 800,
        width: 1350
    });

    win.removeMenu();
    win.loadURL("https://twitch.tv");

    win.on("close", () => {
        let size = win.getSize();
        let pos = win.getPosition();
        let closeWin = new BrowserWindow({
            frame: false,
            width: size[0],
            height: size[1],
            x: pos[0],
            y: pos[1],
            backgroundColor: "#000000"
        });

        setTimeout(() => {
            closeWin.close();
        }, 500);
    })
}

app.whenReady().then(() => {
    createLaunchWindow();

    let template = [
        {
            label: "Account",
            submenu: [
                { role: "Sign in" },
                { role: "Sign up" }
            ]
        }
    ];
    let appmenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(appmenu);
}).catch((err) => {
    console.log(err);
    process.exit(1);
})