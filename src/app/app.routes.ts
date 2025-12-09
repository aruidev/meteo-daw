export const routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home').then(m => m.Home)
	},
	{
		path: 'weather',
		loadComponent: () => import('./pages/weather/weather').then(m => m.Weather)
	},
	{
		path: 'map',
		loadComponent: () => import('./pages/map/map').then(m => m.Map)
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about/about').then(m => m.About)
	},
	{
		path: 'contact',
		loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
	},
	{
		path: 'faq',
		loadComponent: () => import('./pages/faq/faq').then(m => m.Faq)
	},
	{
		path: 'gloassary',
		loadComponent: () => import('./pages/glossary/glossary').then(m => m.Glossary)
	},
];
