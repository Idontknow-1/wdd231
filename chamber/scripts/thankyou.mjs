export function initThankYou() {
// thankyou html
    const myInfo = new URLSearchParams(window.location.search);
    const resultsElement = document.querySelector('#results');

    if (resultsElement) {
        resultsElement.innerHTML = `
            <p><strong>Your Name:</strong> ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
            <p><strong>Your Phone:</strong> ${myInfo.get('phone')}</p>
            <p><strong>Your Email:</strong> ${myInfo.get('email')}</p>
            <p><strong>Your Business Name:</strong> ${myInfo.get('business')}</p>
            <p><strong>Submission Date:</strong> ${myInfo.get('timestamp')}</p>
            `;
    }
}