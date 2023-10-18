const { app, BrowserWindow } = require("electron")

app.whenReady()
    .then(function() {
        // Aqui criaremos a janela
        const janela = new BrowserWindow({
            autoHideMenuBar: true,
            height: 600,
            resizable: false,
            width: 800
        })
        janela.loadFile("./public/index.html")
    })