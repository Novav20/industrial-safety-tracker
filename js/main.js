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

function renderEquipmentList(items) {
    const container = document.querySelector('#equipment-container');
    //TODO: Which ops is more efficient? cleaning the container or looking for existing id an skip it.
    container.innerHTML = '';
    items.forEach((equipment) => {
        const statusClass = equipment.status === 'Needs Maintenance' ? 'status-maintenance': '';
        const equipmentHTML = `
        <div class="equipment-card ${statusClass}">
            <h2>${equipment.name}</h2>
            <p>Status: <strong>${equipment.status}</strong></p>
            <p>Last Checked: ${equipment.lastChecked}</p>
        </div>
        `;

        container.innerHTML += equipmentHTML;
    });
}

function init() {
    setupMobileNavigation();
    setupFormValidation();

    if (document.querySelector('#equipment-container')) {
        renderEquipmentList(equipmentData);
        const searchInput = document.querySelector('#search-input');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredEquipment = equipmentData.filter((equipment) => {
                return equipment.name.toLowerCase().includes(searchTerm);
            });
            renderEquipmentList(filteredEquipment);
        });
    }
}

init();