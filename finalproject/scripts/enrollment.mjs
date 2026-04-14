export function initEnroll() {
    const form = document.querySelector('#enrollmentForm') || document.querySelector('form');
    const timestampField = document.querySelector('#timestamp');

    if (form) {
        form.addEventListener('submit', (event) => {
            const dobInput = document.querySelector('#dob').value;
            const dob = new Date(dobInput);
            const today = new Date();

            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }

            // Age Validation
            if (age < 1 || age > 3) {
                event.preventDefault();
                alert("Enrollment is currently limited to children between 1 and 3 years old.");
            } else if (timestampField) {

                timestampField.value = new Date().toISOString();
            }
        });
    }

    const openBtn1 = document.querySelector("#openBtn1");
    const openBtn2 = document.querySelector("#openBtn2");
    const memberModal = document.querySelector("#memberModal");
    const memberModalText = document.querySelector("#modalContent");
    const closeBtn = document.querySelector("#closeBtn");

    const updateAndShowModal = (title, tuition, hours) => {
        if (memberModalText && memberModal) {
            memberModalText.innerHTML = `
                <h2>${title}</h2>
                <ul>
                    <li>Tuition: ${tuition}</li>
                    <li>Hours: ${hours}</li>
                    <li>Ages: 1 - 3 yrs only</li>
                </ul>`;
            memberModal.showModal();
        }
    };

    if (openBtn1) {
        openBtn1.addEventListener("click", () => updateAndShowModal("Full-Time Care", "$150", "5+ hrs/day"));
    }

    if (openBtn2) {
        openBtn2.addEventListener("click", () => updateAndShowModal("Part-Time Care", "$125", "Less than 5 hrs/day"));
    }

    if (closeBtn && memberModal) {
        closeBtn.addEventListener("click", () => memberModal.close());
    }
}

// Run the function
initEnroll();