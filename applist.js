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
		iconSubPath: 'apple-touch-icon-152x152.png',
		sourceUrl: null,
		developer: 'Jullian',
		developerUrl: 'https://jull.dev',
		playUrl: 'https://sudoku.jull.dev/',
		offline: true,
		installable: true,
	},
	{
		slug: 'mastermind',
		title: 'Mastermind',
		category: 'Puzzle',
		iconSubPath: 'apple-touch-icon-152x152.png',
		sourceUrl: null,
		developer: 'Jullian',
		developerUrl: 'https://jull.dev',
		playUrl: 'https://mastermind.jull.dev/',
		offline: true,
		installable: true,
	},
	{
		slug: 'mahjong',
		title: 'Mahjong',
		category: 'Strategy',
		iconSubPath: 'android-chrome-192x192.png',
		sourceUrl: null,
		developer: 'Jullian',
		developerUrl: 'https://jull.dev',
		playUrl: 'https://mahjong.jull.dev/',
		offline: true,
		installable: true,
	},
	{
		slug: 'snake-cute',
		title: 'Snake (Cute)',
		category: 'Strategy',
		iconSubPath: 'icon-192.png',
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
		iconSubPath: 'touch-icon.png',
		sourceUrl: 'https://github.com/vcjhwebdev/sudoku/',
		developer: 'vcjhwebdev',
		developerUrl: 'https://github.com/vcjhwebdev/',
		playUrl: 'https://vcjhwebdev.github.io/sudoku/',
		offline: true,
		installable: true,
	},
	{
		slug: 'waterwars',
		title: 'Waterwars (Battleship)',
		category: 'Strategy',
		iconSubPath: 'touch-icon-iphone-retina.png',
		sourceUrl: 'https://github.com/vcjhwebdev/waterwars/',
		developer: 'vcjhwebdev',
		developerUrl: 'https://github.com/vcjhwebdev',
		playUrl: 'https://vcjhwebdev.github.io/waterwars/',
		offline: true,
		installable: true,
	},
	// https://github.com/vcjhwebdev/slapjack
	// https://github.com/vcjhwebdev/blackjack
	{
		slug: 'the-cube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'apple-touch-icon.png',
		sourceUrl: 'https://github.com/bsehovac/the-cube/',
		developer: 'Boris Šehovac',
		developerUrl: 'https://github.com/bsehovac/',
		playUrl: 'https://bsehovac.github.io/the-cube/',
		offline: true,
		installable: true,
	},
	{
		slug: 'hangapp',
		title: 'Hangapp',
		category: 'Puzzle',
		iconSubPath: 'logo192.png',
		sourceUrl: 'https://github.com/kylesureline/hangapp',
		developer: 'Kyle Scheuerlein',
		developerUrl: 'https://kylesureline.com/',
		playUrl: 'https://kylesureline.com/hangapp/',
		offline: true,
		installable: true,
	},
	{
		slug: 'tetra',
		title: 'Tetra (Tetris)',
		category: 'Strategy',
		iconSubPath: 'android-icon-192x192.png',
		sourceUrl: 'https://github.com/tmaiadev/tetra',
		developer: 'Thalles Maia',
		developerUrl: 'https://thallesmaia.com/',
		playUrl: 'https://tmaiadev-tetra.netlify.app/',
		offline: true,
		installable: true,
	},
	{
		slug: 'tictactoe',
		title: 'TicTacToe',
		category: 'Strategy',
		iconSubPath: 'apple-icon-180x180.png',
		sourceUrl: 'https://github.com/tmaiadev/tictactoe',
		developer: 'Thalles Maia',
		developerUrl: 'https://thallesmaia.com/',
		playUrl: 'https://tmaiadev-tictactoe.netlify.app/',
		offline: true,
		installable: true,
	},
	{
		slug: 'snake-classic',
		title: 'Snake (Classic)',
		category: 'Strategy',
		iconSubPath: 'android-chrome-192x192.png',
		sourceUrl: 'https://github.com/tmaiadev/snake',
		developer: 'Thalles Maia',
		developerUrl: 'https://thallesmaia.com/',
		playUrl: 'https://tmaiadev-snake.netlify.app/',
		offline: true,
		installable: true,
	},
	{
		slug: 'pacman',
		title: 'Pacman',
		category: 'Strategy',
		iconSubPath: 'launcher-icon-4x.png',
		sourceUrl: 'https://github.com/vitaliy-bobrov/pacman-pwa',
		developer: 'Vitalii Bobrov',
		developerUrl: 'https://github.com/vitaliy-bobrov',
		playUrl: 'https://bobrov.dev/pacman-pwa/',
		offline: true,
		installable: true,
	},
	{
		slug: 'memory',
		title: 'Memory',
		category: 'Strategy',
		iconSubPath: '192.png',
		sourceUrl: null,
		developer: null,
		developerUrl: null,
		playUrl: 'https://pwa-memory-game.surge.sh/',
		offline: true,
		installable: true,
	},
	{
		slug: 'tower-game',
		title: 'Tower Game',
		category: 'Casual',
		iconSubPath: 'icon-192.png',
		sourceUrl: 'https://github.com/iamkun/tower_game',
		developer: 'iamkun',
		developerUrl: 'https://github.com/iamkun',
		playUrl: 'https://www.towergame.app/',
		offline: true,
		installable: true,
	},

	// https://offline-dino-game.firebaseapp.com/ (Broken, needs HIDDEN_CLASS='hidden')

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
		if (app.installable) {
			if (!app.offline) {
				const onlineOnlyEl = document.createElement('span')
				onlineOnlyEl.classList.add('onlineonly')
				onlineOnlyEl.textContent = '🌐'
				appTitleEl.appendChild(onlineOnlyEl)
			}
		} else {
			const notInstallableEl = document.createElement('img')
			notInstallableEl.setAttribute('src', 'icons/uninstallable.svg')
			notInstallableEl.classList.add('notinstallable')
			notInstallableEl.textContent = '💾'
			appTitleEl.appendChild(notInstallableEl)
		}
		if (app.playUrl) {
			const externalLinkEl = document.createElement('img')
			externalLinkEl.setAttribute('src', 'icons/external-link.svg')
			externalLinkEl.classList.add('externallink')
			appTitleEl.appendChild(externalLinkEl)
		}
		appListEl.appendChild(appListItemEl)
	})
}

main()
