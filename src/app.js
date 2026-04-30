import './app.scss';
import { inview } from './js/project/inview';

function start() {
    setTimeout(() => {
        const bodyEl = document.querySelector('body');
        const preloaderEl = document.getElementById('preloader');

        preloaderEl.classList.add('hide');
        bodyEl.style.height = '100%';
        bodyEl.style.overflowY = 'auto';

        setTimeout(() => {
            preloaderEl.style.opacity = '0';
        }, 200);

        setTimeout(() => {
            preloaderEl.remove();

            if (inview) console.log('animate started');
            inview();
        }, 500);
    }, 1500);

}

start();
