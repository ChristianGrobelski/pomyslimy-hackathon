// ==UserScript==
// @name         Hackathon360 Nike Air Max
// @namespace    http://tampermonkey.net/
// @version      2024-05-24
// @description  try to take over the world!
// @author       You
// @match        https://allegro.pl/oferta/buty-meskie-sportowe-nike-air-max-270-ah8050-002-r-43-15261931306
// @icon         https://www.google.com/s2/favicons?sz=64&domain=allegro.pl
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    const script = document.createElement('script');
    script.src = 'https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy';
    document.body.appendChild(script);

    function replaceGalleryContent() {
        // Find the div by data-box-name attribute
        const galleryContainer = document.querySelector('div[data-box-name="gallery container"]');

        if (galleryContainer) {
            // Clear existing content
            galleryContainer.innerHTML = '';

            // Add new content - example: a simple message or you can append other HTML elements
            const cloudImage360 = document.createElement('div');
            cloudImage360.setAttribute('style', 'margin-top: 24px;');
            cloudImage360.setAttribute('class', 'cloudimage-360');
            cloudImage360.setAttribute('data-folder', 'https://scaleflex.cloudimg.io/v7/demo/360-nike/');
            cloudImage360.setAttribute('data-filename-x', 'nike-{index}.jpg');
            cloudImage360.setAttribute('data-amount-x', '35');
            cloudImage360.setAttribute('data-speed', '100');
            cloudImage360.setAttribute('data-drag-speed', '120');
            cloudImage360.setAttribute('data-filename-y', 'nike-y-{index}.jpg');
            cloudImage360.setAttribute('data-amount-y', '36');
            cloudImage360.setAttribute('data-autoplay-behavior', 'spin-xy');
            cloudImage360.setAttribute('data-magnifier', '2');

            // Append the cloudImage360 to the body or a specific part of the page
            galleryContainer.appendChild(cloudImage360);

            console.log('Gallery container content replaced.');

            // initialize as content was added after script load
            window.CI360.init();
        } else {
            console.log('Gallery container not found.');
        }
    }

    // Ensure the script is loaded before adding the model-viewer component
    script.onload = () => {
        replaceGalleryContent();
    };
})();