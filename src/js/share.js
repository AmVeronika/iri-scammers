import * as VanillaSharing from 'vanilla-sharing';
import meta from '../data/meta.json';

const createOptions = (options = {}) => {
    const {
        url = meta.url,
        title = meta.title,
        description = meta.description,
        fbappid: fbAppId = meta.fbappid,
        isVkParse = false
    } = options;

    return {
        url,
        title,
        description,
        image: `${meta.url}share.jpg`,
        media: `${meta.url}share.jpg`,
        isVkParse,
        fbAppId
    };
};

const registerListener = (buttonNodeElement, options) => {
    const { social } = buttonNodeElement.dataset;
    const isNativeShare = social === 'all' && navigator.share !== undefined;

    if (isNativeShare) {
        buttonNodeElement.classList.add('share__item--show');
    }

    buttonNodeElement.addEventListener('click', () => {
        if (isNativeShare) {
            navigator.share({
                title: options.title,
                url: options.url
            });
        } else {
            VanillaSharing[social](options);
        }
    });
};

export const initShareButtons = (options = {}) => {
    const buttons = document.querySelectorAll('.share__item');

    if (buttons.length > 0) {
        const finOptions = createOptions(options);

        buttons.forEach((button) => {
            registerListener(button, finOptions);
        });
    }
};
