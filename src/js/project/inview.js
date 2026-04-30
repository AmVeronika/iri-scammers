import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export const inview = () => {
    const getElsToEnter = [
        document.querySelector('.header__h1'),
        document.querySelector('.header__subtitle'),
        document.querySelectorAll('.block-1__icon'),
        document.querySelectorAll('.block-1__text'),
        document.querySelectorAll('.block-1__title'),
        document.querySelectorAll('.block-2__title'),
        document.querySelectorAll('.card-sign'),
        document.querySelectorAll('.card-sign__icon'),
        document.querySelectorAll('.block-3__title'),
        document.querySelectorAll('.block-3__text'),
        document.querySelectorAll('.block-4__title'),
        document.querySelectorAll('.block-4__text'),
        document.querySelectorAll('.block-4__item'),
        document.querySelectorAll('.block-4__item-image'),
        document.querySelectorAll('.block-5__0-text'),
        document.querySelectorAll('.block-5__1-text'),
        document.querySelectorAll('.block-5__1-item'),
        document.querySelector('.block-5__2-title'),
        document.querySelectorAll('.block-5__2-item'),
        document.querySelectorAll('.block-5__2-text'),
        document.querySelector('.block-6__title'),
        document.querySelectorAll('.block-6__item'),
        document.querySelector('.footer__advertiser ')
    ];

    const elementsToEnter = getElsToEnter;
    const enterClass = 'entered';

    const btnsArrow = document.querySelectorAll('.button-arrow');
    // const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    btnsArrow.forEach((btn) => {
        btn.onclick = () => {
            main.scrollIntoView({ behavior: 'smooth' });
        };
    });
    const addScrollTriggers = (els) => {
        if (!els?.length) return;

        const elements = gsap.utils.toArray(els);

        console.log('elements', elements);
        elements.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 99%',
                end: 'top 99%',
                once: true,
                onEnter: () => {
                    el.classList.add(enterClass);
                }
            });
        });
    };

    addScrollTriggers(elementsToEnter);

};
