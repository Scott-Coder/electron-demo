const {app, BrowserWindow, Menu} = require("electron")

let mainWindow

// 创建window窗口
function createWindow () {
	
	// 初始化窗口基本大小
	mainWindow = new BrowserWindow({
		width: 800, 
		height: 600
	})

	// 加载app主页面文件
	mainWindow.loadFile("./index.html")

	// 打开调试工具
	// mainWindow.webContents.openDevTools()

	// 监听窗口关闭事件
	mainWindow.on("closed", function () {
		mainWindow = null
	})
}


app.on("ready", createWindow)


app.on("window-all-closed", function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on("activate", function () {
	if (mainWindow === null) {
		createWindow()
	}
})

// 自定义窗口菜单栏
const template = [
	{
		label: "menu1"
	},{
		label: "menu2"
	},{
		label: "menu3"
	},{
		label: "menu4"
	}
];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)