export async function loadActivities() {
    const container = document.querySelector('#activity-gallery');
    if (!container) return;

    try {
        const response = await fetch('scripts/activities.json');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const activities = await response.json();
        
        // 1. Shuffle the array
        const shuffled = activities.sort(() => 0.5 - Math.random());
        
        // 2. Take only the first 6 items
        const selectedActivities = shuffled.slice(0, 15);
        
        // Clear container first (prevents duplicates if function runs twice)
        container.innerHTML = "";

        // 3. Display the selected items
        selectedActivities.forEach(item => {
            const card = document.createElement('div');
            card.className = 'activity-card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Focus:</strong> ${item.benefit}</p>
                <p><strong>Target Age:</strong> ${item.age}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Fetch Error:", error);
        container.innerHTML = "<p>Sorry, we couldn't load the activities right now.</p>";
    }
}

export function updateVisitCounter() {
    const visitDisplay = document.querySelector('#visit-count');
    if (!visitDisplay) return;

    let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

    if (numVisits !== 0) {
        visitDisplay.textContent = `You have visited this page ${numVisits} times.`;
    } else {
        visitDisplay.textContent = "This is your first visit. Welcome!";
    }

    numVisits++;
    localStorage.setItem('numVisits-ls', numVisits);
}

// Call them at the bottom
loadActivities();
updateVisitCounter();