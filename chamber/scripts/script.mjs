console.log("Main script is running!");

import { initForm } from "./form.mjs";
import { initSpotlights } from "./memberspotlight.mjs";
import { initWeather } from "./weather.mjs";
import { initThankYou } from "./thankyou.mjs";

initForm();
initSpotlights();
initWeather();
initThankYou();

// nav
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// footer copyright and last modified
const yearSpan = document.getElementById('currentyear');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;