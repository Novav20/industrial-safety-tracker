// --- Mobile Navigation ---
function setupMobileNavigation() {
    const hamburgerBtn = document.querySelector('#hamburger-btn');
    const navMenu = document.querySelector('nav');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
        });
    }
}

// -- Form Validation ---
function setupFormValidation() {
    const incidentForm = document.querySelector('form');

    if (incidentForm) {
        const titleInput = document.querySelector('#incident-title');

        incidentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const titleValue = titleInput.value.trim();

            if (titleValue === '') {
                alert('Incident Title cannot be empty.');
            } else {
                alert('Form submitted successfully!');
            }
        });
    }
}

function init() {
    setupMobileNavigation();
    setupFormValidation();
}

init();