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

// show all members
// async function getMemberData() {
//     const response = await fetch(url);
//     const data = await response.json();
    

//     // displayMembers(data.members);
// }

// const displayMembers = (members) => {
//     members.forEach(member => {
//         let card = document.createElement('section');

//         // divs
//         let headerDiv = document.createElement('div');
//         let contentDiv = document.createElement('div');
//         let infoDiv = document.createElement('div');
//         headerDiv.className = "card-header";
//         contentDiv.className = "card-content";
//         infoDiv.className = "card-info";

//         // name
//         let name = document.createElement('h3');
//         name.textContent = member.name;

//         // info
//         let address = document.createElement('p');
//         let phone = document.createElement('p');
//         address.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
//         phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
        
//         // website
//         let website = document.createElement('p');
//         let websiteurl = document.createElement('a');
//         let displayLink = member.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
//         website.innerHTML = "<strong>URL: </strong>";
//         websiteurl.textContent = displayLink;
//         websiteurl.setAttribute('href', member.website);
//         websiteurl.setAttribute('target', '_blank');
//         website.appendChild(websiteurl);

//         // image
//         let image = document.createElement('img');
//         image.setAttribute('src', member.image);
//         image.setAttribute('loading', 'lazy');
//         image.setAttribute('width', '200');
//         image.setAttribute('height', '150');

//         headerDiv.appendChild(name);

//         infoDiv.appendChild(address);
//         infoDiv.appendChild(phone);
//         infoDiv.appendChild(website);

//         contentDiv.appendChild(image);
//         contentDiv.appendChild(infoDiv);

//         card.appendChild(headerDiv);
//         card.appendChild(contentDiv);
//         cards.appendChild(card);
//     });
// }

// getMemberData();