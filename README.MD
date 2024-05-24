# Team Pomyślimy:  The ability to view the purchased product in 3D on Allegro
This repository includes an MVP for the ability to view a purchased product in 3D on Allegro. The project is created as part of the DEX Hackathon 2024

## Goals
Our aim for this project was to make online shopping more interactive and visually appealing by introducing 3D product displays at Allegro. With this 3D display, users have the ability to view products from all angles, as they would in a physical store.

## Project Overview
We used the tampermonkey plugin that embeds external scripts into the product page.
It allowed us, to replace the product photo with a 3D model to visualize our idea.
To be able to display 3D models we used the Scaleflex library

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed a web browser that supports the Tampermonkey extension (e.g., Chrome, Firefox).
- You have an internet connection to download the necessary scripts and view 3D models.

## Installation
To set up this project follow these steps:

1. **Install TamperMonkey Plugin:**
   - Go to the Tampermonkey [Chrome extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) page.
   - Click 'Add to Chrome' or 'Add to Firefox' and follow the prompts to install the extension.

2. **Add JS Scripts in TamperMonkey:**
   - Open the following links to install the required scripts in TamperMonkey:
     - [AirMax Script](https://hackathon.darekjcompany.smallhost.pl/scripts/airmax.user.js)
     - [Brelok Script](https://hackathon.darekjcompany.smallhost.pl/scripts/brelok.user.js)
   - Click the 'Install' button on each script page.

## How to Use
After installing the scripts, you can see the 3D models on the product pages by visiting the following links:
- [Nike Air Max 270](https://allegro.pl/oferta/buty-meskie-sportowe-nike-air-max-270-ah8050-002-r-43-15261931306)
- [Star Wars Brelok](https://allegro.pl/oferta/brelok-do-kluczy-gwiezdne-wojny-star-wars-14932663239)

## Usage Examples
Once the scripts are installed, navigate to one of the product links above. You should see the product images replaced by interactive 3D models that you can rotate.

## Contributors

- Dawid Studziński
- Christian Grobelski
- Magdalena Dusza
- Dariusz Jargus
- Przemysław Wojnar


