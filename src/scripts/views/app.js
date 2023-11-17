/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer.initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Hero from './pages/hero';
import HamburgerMenu from '../utils/hamburger-menu';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });

        HamburgerMenu();
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        if (url === '/' || url === '/restaurants') {
            this.hero();
        } else {
            this.removeHero();
        }
        this._content.innerHTML = await page.render();
        const skipLink = document.querySelector('.skip-link');
        const mainContent = document.querySelector('#mainContent');

        skipLink.addEventListener('click', (event) => {
            event.preventDefault();
            mainContent.focus();
        });
        await page.afterRender();
    }

    hero() {
        const hero = document.querySelector('#mainContent');
        if (document.querySelector('#hero')) {
            return;
        }
        hero.insertAdjacentHTML('beforebegin', Hero.render());
    }

    removeHero() {
        const hero = document.querySelector('#hero');
        if (hero) {
            hero.remove();
        }
    }
}

export default App;
