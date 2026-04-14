export function initThankYou() {
// thankyou html
    const resultsElement = document.querySelector('#results');

    if (resultsElement) {
        const myInfo = new URLSearchParams(window.location.search);

        const rawTimestamp = myInfo.get('timestamp');
        const formattedDate = rawTimestamp 
            ? new Date(rawTimestamp).toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            : 'N/A';

        resultsElement.innerHTML = `
            <p><strong>Child Name:</strong> ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
            <p><strong>Child DOB:</strong> ${myInfo.get('dob')}</p>
            <p><strong>Your Phone:</strong> ${myInfo.get('phone')}</p>
            <p><strong>Your Email:</strong> ${myInfo.get('email')}</p>
            <p><strong>Care Option:</strong> ${myInfo.get('caretime')}</p>
            <p><strong>Submission Date:</strong> ${formattedDate}</p>
            `;
    }
}

initThankYou();