export async function initSpotlights() {
// member info
    const url = 'scripts/members.json';

    async function getSpotlightMembers() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();

                const eligibleMembers = data.members.filter(member =>
                    member.membershiplevel === 3 || member.membershiplevel === 2
                );

                const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

                const spotlightMembers = shuffled.slice(0,3);

                displaySpotlights(spotlightMembers);
            }
        } catch (error) {
            console.error("Error loading spotlights:", error);
        }
    }

    function displaySpotlights(members) {
        const spotlightContainer = document.querySelector('#spotlight-container');
        if (!spotlightContainer) return;

        spotlightContainer.innerHTML = "";

        members.forEach(member => {
            const section = document.createElement('section');
            section.className = "spotlight-card";

            const levelName = member.membershiplevel === 3 ? "Gold" : "Silver";

            section.innerHTML = `
                <div class="card-header">
                    <h3>${member.name}</h3>
                </div>
                <div class="card-content">
                    <img src="${member.image}" alt="${member.name} logo" loading="lazy">
                    <div class="card-info">
                        <p><strong>PHONE:</strong> ${member.phone}</p>
                        <p><strong>ADDRESS:</strong> ${member.address}</p>
                        <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website.replace(/^https?:\/\//, '')}</a></p>
                        <span class="membership-badge">${levelName} Member</span>
                    </div>
                </div>
            `;
            spotlightContainer.appendChild(section);
        });
    }

    await getSpotlightMembers();
}
