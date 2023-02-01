const { BrowserWindow, app, Menu } = require("electron");

const createLaunchWindow = () => {
    let win = new BrowserWindow({
        height: 450,
        width: 450,
        icon: "./icon.png",
        frame: false
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
}

app.whenReady().then(() => {
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


    createLaunchWindow();
}).catch((err) => {
    console.log(err);
    process.exit(1);
})