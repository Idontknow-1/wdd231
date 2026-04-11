export function initEnroll() {
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

    const memberModal = document.querySelector("#memberModal");
    const memberModalText = document.querySelector("#modalContent");
    const closeBtn = document.querySelector("#closeBtn");

    if (openBtn1) {
        openBtn1.addEventListener("click", () => {
            memberModalText.innerHTML = `
                <h2>Full-Time Care</h2>
                <ul>
                    <li>Tuition: $150</li>
                    <li> 5 hrs and up, per day</li>
                    <li>Ages: 1 - 3 yrs only</li>
                </ul>`;
            memberModal.showModal();
        });
    }

    if (openBtn2) {
        openBtn2.addEventListener("click", () => {
            memberModalText.innerHTML = `
                <h2>Part-Time Care</h2>
                <ul>
                    <li>Tuition: $125</li>
                    <li>Less than 5 hrs, per day</li>
                    <li>Ages: 1 - 3 yrs only</li>
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

initEnroll();