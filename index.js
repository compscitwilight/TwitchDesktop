const {
    BrowserWindow,
    app,
    Menu,
    ipcRenderer,
    contextBridge
} = require("electron");

let template = [
    {
        label: "Account",
        submenu: [
            { label: "Sign in" },
            { label: "Sign up" }
        ]
    },
    {
        label: "Prime",
        submenu: [
            { label: "Prime Subscription" }
        ]
    },
    {
        label: "About",
        submenu: [
            { label: "Information" },
            { label: "Repository" },
            { label: "Credits" }
        ]
    },
    {
        label: "Debug",
        submenu: [
            { label: "Developer Tools" }
        ]
    }
];
let appmenu = Menu.buildFromTemplate(template);

const createLaunchWindow = () => {
    let splashWin = new BrowserWindow({
        height: 450,
        width: 450,
        icon: "./icon.png",
        frame: false,
        resizable: false,
        fullscreenable: false
    });

    splashWin.removeMenu();
    splashWin.loadFile("./frontend/launch.html");
    setTimeout(() => {
        splashWin.close();
        let configWindow = new BrowserWindow({
            height: 600,
            width: 600,
            icon: "./icon.png"
        })

        configWindow.loadFile("./frontend/config.html");
        createMainWindow();
        configWindow.close();
        
        /*
        ipcMain.handle("start-app", (event) => {
            configWindow.close();
            createMainWindow();
        })
        */
    }, 3000);
}

const createMainWindow = () => {
    let win = new BrowserWindow({
        title: "Twitch",
        icon: "./icon.png",
        height: 800,
        width: 1350
    });

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
    Menu.setApplicationMenu(appmenu);
    createLaunchWindow();
}).catch((err) => {
    console.log(err);
    process.exit(1);
})