// nav
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// grid/list buttons
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#cards');

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showlist);

function showlist() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// member info
const url = 'scripts/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let websiteurl = document.createElement('a');
        let image = document.createElement('img');
        let displayLink = member.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        

        website.textContent = "URL: ";
        websiteurl.textContent = displayLink;
        websiteurl.setAttribute('href', member.website);
        websiteurl.setAttribute('target', '_blank');
        website.appendChild(websiteurl);

        image.setAttribute('src', member.image);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getMemberData();

// footer copyright and last modified
const yearSpan = document.getElementById('currentyear');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;