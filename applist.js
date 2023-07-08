//--- Utils
// https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
}
function templateReplace(templateStr, args) {
	console.log(arguments)
	let out = templateStr
	for (let key in args) {
		let keyPattern = new RegExp(escapeRegExp("{{" + key + "}}"), "g")
		let value = args[key]
		console.log('key', key, 'value', value)
		out = out.replace(keyPattern, value)
	}
	out = out.trim()
	return out
}
function createEl(htmlStr) {
	let parent = document.createElement('div')
	parent.innerHTML = htmlStr
	let el = parent.firstElementChild
	el.remove()
	delete parent
	return el
}

//--- Templates
const appListItemTemplate = `
<li class="app-list-item">
	<a href="{{url}}">
		<img src="{{iconPath}}" class="app-icon">
		<div class="app-info">
			<div class="app-title">{{title}}</div>
			<div class="app-category">{{category}}</div>
		</div>
	</a>
</li>`

//--- Data
let appDataList = [
	{
		slug: '2048',
		title: '2048',
		category: 'Puzzle',
		iconSubPath: 'meta/apple-touch-icon.png',
		sourceUrl: 'https://github.com/gabrielecirulli/2048',
		developer: 'Gabriele Cirulli',
		developerUrl: 'https://github.com/GabrieleCirulli/',
		playUrl: null,
		offline: true,
		installable: true,
	},
	{
		slug: 'sudoku-pretty',
		title: 'Sudoku (Pretty)',
		category: 'Puzzle',
		iconSubPath: 'img/icons/apple-touch-icon-152x152.png',
		sourceUrl: null,
		developer: 'Jullian',
		developerUrl: 'https://jull.dev',
		playUrl: 'https://sudoku.jull.dev/',
		offline: false,
		installable: false,
	},
	{
		slug: 'mastermind',
		title: 'Mastermind',
		category: 'Puzzle',
		iconSubPath: 'img/icons/apple-touch-icon-152x152.png',
		sourceUrl: null,
		developer: 'Jullian',
		developerUrl: 'https://jull.dev',
		playUrl: 'https://mastermind.jull.dev/',
		offline: false,
		installable: false,
	},
	{
		slug: 'snake',
		title: 'Snake',
		category: 'Strategy',
		iconSubPath: 'images/icons/icon-192.png',
		sourceUrl: 'https://github.com/snake-pwa/snake',
		developer: 'keeshii',
		developerUrl: 'https://github.com/keeshii',
		playUrl: 'https://snake-pwa.github.io/',
		offline: true,
		installable: true,
	},
	{
		slug: 'sudoku-random',
		title: 'Sudoku (Random)',
		category: 'Puzzle',
		iconSubPath: 'touch-icons/touch-icon.png',
		sourceUrl: 'https://github.com/vcjhwebdev/sudoku/',
		developer: 'vcjhwebdev',
		developerUrl: 'https://github.com/vcjhwebdev/',
		playUrl: 'https://vcjhwebdev.github.io/sudoku/',
		offline: true,
		installable: true,
	},
	{
		slug: 'the-cube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'assets/icons/apple-touch-icon.png',
		sourceUrl: 'https://github.com/bsehovac/the-cube/',
		developer: 'Boris Šehovac',
		developerUrl: 'https://github.com/bsehovac/',
		playUrl: 'https://bsehovac.github.io/the-cube/',
		offline: true,
		installable: true,
	},
]
appDataList.forEach(function(app){
	if (app.playUrl) {
		app.url = app.playUrl
	} else {
		app.url = '/app/' + app.slug + '/'
	}
	app.iconPath = '/app/' + app.slug + '/' + app.iconSubPath
})


//--- Main
function main() {
	let appListEl = document.querySelector('ul.app-list')
	appDataList.forEach(function(app){
		let appListItemHtmlStr = templateReplace(appListItemTemplate, app)
		let appListItemEl = createEl(appListItemHtmlStr, app)
		let appTitleEl = appListItemEl.querySelector('.app-category')
		if (!app.offline) {
			let onlineOnlyEl = document.createElement('span')
			onlineOnlyEl.textContent = '🌐'
			appTitleEl.appendChild(onlineOnlyEl)
		}
		if (!app.installable) {
			let notInstallableEl = document.createElement('span')
			notInstallableEl.textContent = '💾'
			appTitleEl.appendChild(notInstallableEl)
		}
		if (app.playUrl) {
			let externalLinkEl = document.createElement('span')
			externalLinkEl.textContent = '🔗'
			appTitleEl.appendChild(externalLinkEl)
		}
		appListEl.appendChild(appListItemEl)
	})
}

main()
