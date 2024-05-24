// ==UserScript==
// @name         Hackathon360 brelok
// @namespace    http://tampermonkey.net/
// @version      2024-05-24
// @description  try to take over the world!
// @author       You
// @match        https://allegro.pl/oferta/brelok-do-kluczy-gwiezdne-wojny-star-wars-14932663239
// @icon         https://www.google.com/s2/favicons?sz=64&domain=allegro.pl
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';
    script.type = 'module';
    document.head.appendChild(script);

    function replaceGalleryContent() {
        // Find the div by data-box-name attribute
        const galleryContainer = document.querySelector('div[data-box-name="gallery container"]');

        if (galleryContainer) {
            // Clear existing content
            galleryContainer.innerHTML = '';

            // Add new content - example: a simple message or you can append other HTML elements
                const modelViewer = document.createElement('model-viewer');
            modelViewer.setAttribute('style', 'width: 100%; height: 400px;'); // Set size
            modelViewer.src = 'https://hackathon.darekjcompany.smallhost.pl/brelok/NeilArmstrong.glb'; // URL to the 3D model
            modelViewer.setAttribute('alt', 'A 3D model on the page');
            modelViewer.setAttribute('auto-rotate', '');
            modelViewer.setAttribute('camera-controls', '');
            modelViewer.setAttribute('ar', '');
            modelViewer.setAttribute('environment-image', 'https://hackathon.darekjcompany.smallhost.pl/brelok/moon_1k.hdr');
            modelViewer.setAttribute('poster', 'https://hackathon.darekjcompany.smallhost.pl/brelok/NeilArmstrong.webp');
            modelViewer.setAttribute('touch-action', 'pan-y');

            // Optional: Set more attributes as needed
            // modelViewer.setAttribute('ar', '');

            // Append the model-viewer to the body or a specific part of the page
            galleryContainer.appendChild(modelViewer);

            // Optionally, add more complex HTML
            // galleryContainer.innerHTML = '<p>New content added!</p>';

            console.log('Gallery container content replaced.');
        } else {
            console.log('Gallery container not found.');
        }
    }

    // Ensure the script is loaded before adding the model-viewer component
    script.onload = () => {
        replaceGalleryContent();
    };
})();