import { attractions } from "./places.mjs";

export function initDiscoverCards() {
    function loadAttractions() {
        try {
            if (attractions && attractions.length > 0) {
                displayAttractions(attractions);
            }
        } catch (error) {
            console.error("Error loading attractions:", error);
        }
    }

    function displayAttractions(items) {
        const cardsArea = document.querySelector('#cards-container');
        if (!cardsArea) return;

        cardsArea.innerHTML = "";

        items.forEach((item, index) => {
            const card = document.createElement('section');
            card.className = "discover-card";

            card.style.gridArea = `area${index + 1}`;

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            cardsArea.appendChild(card);
        });
    }

    loadAttractions();
}

initDiscoverCards();

// visitor message
const msPerDay = 86400000;
const now = Date.now();

const visitorMessage = document.querySelector("#visitor-message");

function displayVisitorMessage() {
    const lastVisit = window.localStorage.getItem("last-visit-date");

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDiff = now - parseInt(lastVisit);
        const daysDiff = Math.floor(timeDiff / msPerDay);

        if (timeDiff < msPerDay) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDiff === 1 ? "day" : "days";
            visitorMessage.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
    }

    window.localStorage.setItem("last-visit-date", now);
}

displayVisitorMessage();