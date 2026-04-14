// imports
import { initEnroll } from "./enrollment.mjs";
import { initThankYou } from "./thankyou.mjs";
import { initHeroSlide } from "./heroslide.mjs";
import { loadActivities } from "./freechoiceplay.mjs";

// call
initEnroll();
initThankYou();
initHeroSlide();
loadActivities();

// nav button
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});