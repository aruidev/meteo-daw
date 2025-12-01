
import { Home } from './pages/home/home';
import { Weather } from './pages/weather/weather';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Faq } from './pages/faq/faq';

export const routes = [
	{ path: 'home', component: Home },
	{ path: 'weather', component: Weather },
	{ path: 'about', component: About },
	{ path: 'contact', component: Contact },
	{ path: 'faq', component: Faq },
];
