// Note: appDataList is mutated in main.js
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
		iconSubPath: 'touch-icons/touch-icon-iphone-retina.png',
		sourceUrl: 'https://github.com/vcjhwebdev/waterwars/',
		developer: 'vcjhwebdev',
		developerUrl: 'https://github.com/vcjhwebdev',
		playUrl: null,
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
		category: 'Action',
		iconSubPath: 'icon.png',
		sourceUrl: 'https://js13kgames.com/entries/norman-the-necromancer',
		developer: 'Dan Prince',
		developerUrl: 'https://github.com/danprince',
		playUrl: null,
		installable: true,
		offline: true,
	},
	{
		slug: 'sweepstacks',
		title: 'Sweep Stacks',
		category: 'Puzzle',
		iconSubPath: 'icon-192.png',
		sourceUrl: 'https://github.com/excaliburjs/sweep',
		developer: 'excaliburjs',
		developerUrl: 'https://github.com/excaliburjs/sweep',
		playUrl: 'https://excaliburjs.com/sweep/',
		installable: true,
		offline: false,
	},
	{
		slug: 'mergetin',
		title: 'Mergetin',
		category: 'Puzzle',
		iconSubPath: 'icon-192.webp',
		sourceUrl: null,
		developer: 'Nebula Bytes',
		developerUrl: 'https://nebulabytes.com/',
		playUrl: 'https://mergetin.com/',
		installable: false,
		offline: false,
	},
	{
		slug: 'microsoft-jewel-2',
		title: 'Microsoft Jewel 2',
		category: 'Puzzle',
		iconSubPath: 'large_mobile.webp',
		sourceUrl: null,
		developer: 'MSN Games',
		developerUrl: 'https://zone.msn.com/en-us/home',
		playUrl: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=msjewelnew',
		installable: false,
		offline: false,
	},
	{
		slug: 'microsoft-jewel',
		title: 'Microsoft Jewel',
		category: 'Puzzle',
		iconSubPath: 'large_mobile.webp',
		sourceUrl: null,
		developer: 'MSN Games',
		developerUrl: 'https://zone.msn.com/en-us/home',
		playUrl: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=msjewel',
		installable: false,
		offline: false,
	},
	{
		slug: 'microsoft-gem-drop',
		title: 'Microsoft Gem Drop',
		category: 'Puzzle',
		iconSubPath: 'large_mobile.webp',
		sourceUrl: null,
		developer: 'MSN Games',
		developerUrl: 'https://zone.msn.com/en-us/home',
		playUrl: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=gem-drop',
		installable: false,
		offline: false,
	},
	{
		slug: 'microsoft-bubble',
		title: 'Microsoft Bubble',
		category: 'Puzzle',
		iconSubPath: 'large_mobile.webp',
		sourceUrl: null,
		developer: 'MSN Games',
		developerUrl: 'https://zone.msn.com/en-us/home',
		playUrl: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=microsoft-bubble',
		installable: false,
		offline: false,
	},
	{
		slug: 'microsoft-bubble-classic',
		title: 'Microsoft Bubble Classic',
		category: 'Puzzle',
		iconSubPath: 'large_mobile.webp',
		sourceUrl: null,
		developer: 'MSN Games',
		developerUrl: 'https://zone.msn.com/en-us/home',
		playUrl: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=msbubble',
		installable: false,
		offline: false,
	},


	// https://offline-dino-game.firebaseapp.com/ (Broken, needs HIDDEN_CLASS='hidden')
]
