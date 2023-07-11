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
const gameAppCategories = [
	'Action',
	'Adventure',
	'Board',
	'Card',
	'Casino',
	'Casual',
	'Family',
	'Music',
	'Puzzle',
	'Racing',
	'Role-Playing',
	'Simulation',
	'Sports',
	'Strategy',
	'Trivia',
	'Word',
]
function getAppCategorySlug(appCategory) {
	return appCategory.toLowerCase().replace(/\s/g, '-')
}
function getFilterAppCategoryClass(appCategory) {
	return 'filter-category-' + getAppCategorySlug(appCategory)
}

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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
	},
	{
		slug: 'sudoku-nytimes',
		title: 'Sudoku (NY Times)',
		category: 'Puzzle',
		iconSubPath: 'sudoku-card-icon-256.png',
		sourceUrl: 'https://github.com/vcjhwebdev/sudoku/',
		developer: 'New York Times Games',
		developerUrl: 'https://www.nytimes.com/puzzles/',
		playUrl: 'https://www.nytimes.com/puzzles/sudoku',
		installable: true,
		offline: false,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
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
		installable: true,
		offline: true,
	},
	{
		slug: 'the-neatness',
		title: 'The Neatness',
		category: 'Puzzle',
		iconSubPath: 'small.jpg',
		sourceUrl: 'https://js13kgames.com/entries/the-neatness',
		developer: 'Mark Vasilkov',
		developerUrl: 'https://github.com/mvasilkov',
		playUrl: 'https://js13kgames.com/games/the-neatness/index.html',
		installable: true,
		offline: false,
	},
	{
		slug: 'norman-the-necromancer',
		title: 'Norman the Necromancer',
		category: 'Puzzle',
		iconSubPath: '__small.jpg',
		sourceUrl: 'https://js13kgames.com/entries/norman-the-necromancer',
		developer: 'Dan Prince',
		developerUrl: 'https://github.com/danprince',
		playUrl: null,
		installable: false,
		offline: false,
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

// Randomize
appDataList.forEach(function(app){
	app.sortWeight = Math.random()
})
appDataList.sort((a,b) => a.sortWeight - b.sortWeight)

const appFilterStyle = document.createElement('style')
let appFilterCSS = ''
for (const appCategory of gameAppCategories) {
	const appCategorySlug = getAppCategorySlug(appCategory)
	const filterCategoryClass = getFilterAppCategoryClass(appCategory)
	appFilterCSS += '.app-list.' + filterCategoryClass + ' .app-list-item[category="' + appCategorySlug + '"] { display: none; }\n'
}
appFilterCSS += '.app-list.filter-onlineonly .app-list-item[onlineonly] { display: none; }\n'
appFilterCSS += '.app-list.filter-notinstallable .app-list-item[notinstallable] { display: none; }\n'
appFilterCSS += '.app-list.filter-externallink .app-list-item[externallink] { display: none; }\n'

appFilterStyle.innerHTML += appFilterCSS
document.head.appendChild(appFilterStyle)

// Attribute: onlineonly notinstallable externallink
function onFilterAttributeClick(appAttribute, e){
	const appListClassList = document.querySelector('.app-list').classList
	appListClassList.toggle('filter-' + appAttribute)
	if (appListClassList.contains('filter-' + appAttribute)) {
		e.target.setAttribute('checked', true)
	} else {
		e.target.removeAttribute('checked')
	}
}
function bindFilterAttribute(appAttribute) {
	const onClick = onFilterAttributeClick.bind(null, appAttribute)
	document.querySelector('.app-list-filter-button.filter-' + appAttribute).addEventListener('click', onClick)
}
bindFilterAttribute('notinstallable')
bindFilterAttribute('onlineonly')
bindFilterAttribute('externallink')


//--- Main
function main() {
	let appListEl = document.querySelector('ul.app-list')
	appDataList.forEach(function(app){
		let appListItemHtmlStr = templateReplace(appListItemTemplate, app)
		let appListItemEl = createEl(appListItemHtmlStr, app)
		appListItemEl.setAttribute('category', getAppCategorySlug(app.category))
		let appTitleEl = appListItemEl.querySelector('.app-category')
		if (app.installable) {
			if (!app.offline) {
				const onlineOnlyEl = document.createElement('span')
				onlineOnlyEl.classList.add('icon', 'onlineonly')
				onlineOnlyEl.textContent = '🌐'
				appTitleEl.appendChild(onlineOnlyEl)
				appListItemEl.setAttribute('onlineonly', true)
			}
		} else {
			const notInstallableEl = document.createElement('img')
			notInstallableEl.setAttribute('src', 'icons/uninstallable.svg')
			notInstallableEl.classList.add('icon', 'notinstallable')
			notInstallableEl.textContent = '💾'
			appTitleEl.appendChild(notInstallableEl)
			appListItemEl.setAttribute('notinstallable', true)
		}
		if (app.playUrl) {
			const externalLinkEl = document.createElement('img')
			externalLinkEl.setAttribute('src', 'icons/external-link.svg')
			externalLinkEl.classList.add('icon', 'externallink')
			appTitleEl.appendChild(externalLinkEl)
			appListItemEl.setAttribute('externallink', true)
		}
		appListEl.appendChild(appListItemEl)
	})
}

main()
