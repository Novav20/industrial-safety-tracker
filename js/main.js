const hamburgerBtn = document.querySelector('#hamburger-btn');

const navMenu = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
});


// -- Form Validation ---

const incidentForm = document.querySelector('form');

if (incidentForm) {
    const titleInput = document.querySelector('#incident-title');

    incidentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the page from reloading

        const titleValue = titleInput.value.trim();

        if (titleValue === '') {
            alert('Incident title cannot be empty.');
        } else {
            alert('Form submitted successfully');
        }

    });
}