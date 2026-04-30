import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class ElementsInview {
    #scrollTriggers = [];
    #elementsToEnter = [];
    enterClass = 'entered';
    constructor() {
        this.#elementsToEnter = this.#getElsToEnter();

        this.addScrollTriggers(this.#elementsToEnter);

        window.addEventListener('resize', () => {
            // this.clearScrollTriggers();
            this.addScrollTriggers(this.#elementsToEnter);
        });
    }

    // eslint-disable-next-line class-methods-use-this
    #getElsToEnter() {
        return [
            document.querySelector('.button-arrow--bottom'),
            document.querySelector('.header__top'),
            document.querySelector('.h1'),
            document.querySelector('.header__description'),
            document.querySelector('.button-arrow--bottom')
        ];
    }

    addScrollTriggers(elementsToEnter) {
        this.#scrollTriggers = this.#scrollTriggers
            .concat(elementsToEnter
                .map((el) => ScrollTrigger.create({
                    trigger: el,
                    start: 'top 90%',
                    end: 'bottom top',
                    once: true,
                    onEnter: () => {
                        el.classList.add(this.enterClass);
                    }
                })));
    }
}
