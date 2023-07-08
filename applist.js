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
	},
	{
		slug: 'sudoku',
		title: 'Sudoku',
		category: 'Puzzle',
		iconSubPath: 'img/640x0w.webp',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
	{
		slug: 'thecube',
		title: 'The Cube',
		category: 'Puzzle',
		iconSubPath: 'img/1541289835730-apple-touch-icon.png',
	},
]
appDataList.forEach(function(app){
	app.url = '/app/' + app.slug + '/'
	app.iconPath = '/app/' + app.slug + '/' + app.iconSubPath
})


//--- Main
function main() {
	let appListEl = document.querySelector('ul.app-list')
	appDataList.forEach(function(app){
		console.log('app', app)
		let appListItemHtmlStr = templateReplace(appListItemTemplate, app)
		console.log('appListItemHtmlStr', appListItemHtmlStr)
		let appListItemEl = createEl(appListItemHtmlStr, app)
		console.log('appListItemEl', appListItemEl)
		appListEl.appendChild(appListItemEl)
	})
}

main()
