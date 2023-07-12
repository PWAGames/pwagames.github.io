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
<li class="app-list-item" app-id="{{slug}}">
	<a href="{{url}}">
		<img src="{{iconPath}}" class="app-icon">
		<div class="app-info">
			<div class="app-title">{{title}}</div>
			<div class="app-category">{{category}}</div>
		</div>
	</a>
</li>`
const appCategoryFilterButtonTemplate = `
<button class="app-list-filter-button" filter-category="{{slug}}">
	<img class="icon notinstallable" src="{{iconUrl}}"> {{title}}
</button>`

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

appDataList.forEach(function(app){
	if (app.playUrl) {
		app.url = app.playUrl
	} else {
		app.url = '/app/' + app.slug + '/'
	}
	app.iconPath = '/app/' + app.slug + '/' + app.iconSubPath
})
let appDataMap = {}
appDataList.forEach(function(app){
	appDataMap[app.slug] = app
})

// Randomize
appDataList.forEach(function(app){
	app.sortWeight = Math.random()
})
appDataList.sort((a,b) => a.sortWeight - b.sortWeight)

function filterButtonToggle(filterButton, attrName, attrValue) {
	const appListEl = document.querySelector('.app-list')
	const newValue = ('' + attrValue)
	if (appListEl.hasAttribute(attrName)) {
		const oldValue = appListEl.getAttribute(attrName)
		if (oldValue == newValue) {
			// Uncheck
			appListEl.removeAttribute(attrName)
			filterButton.removeAttribute('checked')
		} else {
			// Change Value
			if (attrName == 'filter-category') {
				const oldFilterButton = document.querySelector('.app-list-filter-button[filter-category][checked]')
				if (oldFilterButton) {
					oldFilterButton.removeAttribute('checked')
				}
			}
			appListEl.setAttribute(attrName, newValue)
			filterButton.setAttribute('checked', '')
		}
	} else {
		// Check
		appListEl.setAttribute(attrName, newValue)
		filterButton.setAttribute('checked', '')
	}
}
function onFilterButtonClick(attrName, attrValue, e) {
	const filterButton = e.target
	filterButtonToggle(filterButton, attrName, attrValue)
}
const appCategoryListEl = document.querySelector('.app-category-list')
const appFilterStyle = document.createElement('style')
let appFilterCSS = ''
for (const appCategory of gameAppCategories) {
	const appCategorySlug = getAppCategorySlug(appCategory)
	appFilterCSS += '.app-list[filter-category="' + appCategorySlug + '"] .app-list-item:not([category="' + appCategorySlug + '"]) { display: none; }\n'

	const filterButtonHtmlStr = templateReplace(appCategoryFilterButtonTemplate, {
		title: appCategory,
		slug: appCategorySlug,
		iconUrl: 'icons/uninstallable.svg',
	})
	const filterButtonEl = createEl(filterButtonHtmlStr)
	const onClick = onFilterButtonClick.bind(null, 'filter-category', appCategorySlug)
	filterButtonEl.addEventListener('click', onClick)
	const categoryApps = appDataList.filter(function(app){ return app.category == appCategory })
	if (categoryApps.length == 0) {
		filterButtonEl.setAttribute('disabled', '')
	}
	appCategoryListEl.appendChild(filterButtonEl)
}

const toggleCategorySection = document.querySelector('.toggle-app-category-filter-section')
toggleCategorySection.addEventListener('click', function(e){
	document.querySelector('.app-category-filter-section').classList.toggle('hidden')
})

// Properties: onlineonly notinstallable externallink
function setupFilterProperty(propName) {
	const filterAttrName = 'filter-' + propName
	const filterButtonEl = document.querySelector('.app-list-filter-button.' + filterAttrName)
	const onClick = onFilterButtonClick.bind(null, filterAttrName, '')
	filterButtonEl.addEventListener('click', onClick)
	appFilterCSS += '.app-list[filter-' + propName + '] .app-list-item[' + propName + '] { display: none; }\n'
}
setupFilterProperty('notinstallable')
setupFilterProperty('onlineonly')
setupFilterProperty('externallink')

appFilterStyle.innerHTML += appFilterCSS
document.head.appendChild(appFilterStyle)

function clearQueryFilter() {
	document.querySelectorAll('.app-list-item').forEach(function(appListItemEl){
		appListItemEl.classList.remove('hidden')
	})
}
function filterAppListByQuery(query) {
	console.log('filterAppListByQuery', query)
	if (query.trim() == '') {
		clearQueryFilter()
		return
	}

	const queryTokens = query.trim().toLowerCase().split(' ')
	const numTokens = queryTokens.length

	appDataList.forEach(function(app){
		let tokensMatched = 0
		for (const token of queryTokens) {
			if (
				(app.title && app.title.toLowerCase().includes(token))
				|| (app.developer && app.developer.toLowerCase().includes(token))
			) {
				tokensMatched += 1
			}
		}
		const appMatched = tokensMatched == numTokens
		console.log(app.title, app.developer, appMatched)
		const appListItemEl = document.querySelector('.app-list-item[app-id="' + app.slug + '"]')
		if (appMatched) {
			appListItemEl.classList.remove('hidden')
		} else {
			appListItemEl.classList.add('hidden')
		}
	})
}
const appListQueryEl = document.querySelector('.app-list-filter-query')
function updateQueryFilter() {
	filterAppListByQuery(appListQueryEl.value)
}
appListQueryEl.addEventListener('change', updateQueryFilter)
appListQueryEl.addEventListener('keyup', updateQueryFilter) // Small list doesn't need debounce


//--- Main
function main() {
	let appListEl = document.querySelector('ul.app-list')
	appDataList.forEach(function(app){
		const appListItemHtmlStr = templateReplace(appListItemTemplate, app)
		const appListItemEl = createEl(appListItemHtmlStr)
		appListItemEl.setAttribute('category', getAppCategorySlug(app.category))
		let appTitleEl = appListItemEl.querySelector('.app-category')
		if (app.installable) {
			if (!app.offline) {
				const onlineOnlyEl = document.createElement('span')
				onlineOnlyEl.classList.add('icon', 'onlineonly')
				onlineOnlyEl.textContent = '🌐'
				appTitleEl.appendChild(onlineOnlyEl)
				appListItemEl.setAttribute('onlineonly', '')
			}
		} else {
			const notInstallableEl = document.createElement('img')
			notInstallableEl.setAttribute('src', 'icons/uninstallable.svg')
			notInstallableEl.classList.add('icon', 'notinstallable')
			appTitleEl.appendChild(notInstallableEl)
			appListItemEl.setAttribute('notinstallable', '')
		}
		if (app.playUrl) {
			const externalLinkEl = document.createElement('img')
			externalLinkEl.setAttribute('src', 'icons/external-link.svg')
			externalLinkEl.classList.add('icon', 'externallink')
			appTitleEl.appendChild(externalLinkEl)
			appListItemEl.setAttribute('externallink', '')
		}
		appListEl.appendChild(appListItemEl)
	})
}

main()
