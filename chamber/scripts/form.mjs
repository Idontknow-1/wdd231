export function initForm() {
// form timestamp
    const timestampField = document.querySelector('#timestamp');
        if (timestampField) {
            timestampField.value = new Date().toISOString();

            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', () => {
                    timestampField.value = new Date().toISOString();
                });
            }
        }

// form modals
    const openBtn1 = document.querySelector("#openBtn1");
    const openBtn2 = document.querySelector("#openBtn2");
    const openBtn3 = document.querySelector("#openBtn3");
    const openBtn4 = document.querySelector("#openBtn4");

    const memberModal = document.querySelector("#memberModal");
    const memberModalText = document.querySelector("#modalContent");
    const closeBtn = document.querySelector("#closeBtn");

    if (openBtn1) {
        openBtn1.addEventListener("click", () => {
            memberModalText.innerHTML = `
                <h2>NP Membership</h2>
                <p>Specifically for non-profit organizations.</p>
                <ul>
                    <li>Fee: $0</li>
                    <li>Basic Directory Listing</li>
                    <li>Community Forum Access</li>
                </ul>`;
            memberModal.showModal();
        });
    }

    if (openBtn2) {
        openBtn2.addEventListener("click", () => {
            memberModalText.innerHTML = `
                <h2>Bronze Membership</h2>
                <ul>
                    <li>Fee: $50/year</li>
                    <li>Training Sessions (2 per year)</li>
                    <li>10% Event Discounts</li>
                </ul>`;
            memberModal.showModal();
        });
    }

    if (openBtn3) {
        openBtn3.addEventListener("click", () => {
            memberModalText.innerHTML = `
                <h2>Silver Membership</h2>
                <ul>
                    <li>Fee: $150/year</li>
                    <li>Monthly Advertising Spotlights</li>
                    <li>20% Event Discounts</li>
                    <li>Social Media Mentions</li>
                </ul>`;
            memberModal.showModal();
        });
    }

    if (openBtn4) {
        openBtn4.addEventListener("click", () => {
            memberModalText.innerHTML = `
                <h2>Gold Membership</h2>
                <ul>
                    <li>Fee: $300/year</li>
                    <li>Home Page Spotlight (Permanent)</li>
                    <li>VIP Event Seating</li>
                    <li>50% Event Discounts</li>
                    <li>All Training Workshops included</li>
                </ul>`;
            memberModal.showModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            memberModal.close();
        });
    }
}