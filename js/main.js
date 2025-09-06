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
        const descriptionInput = document.querySelector('#incident-description');
        const dateInput = document.querySelector('#incident-date');

        incidentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const titleValue = titleInput.value.trim();
            const descriptionValue = descriptionInput.value.trim();
            const dateValue = dateInput.value.trim();
            if (titleValue !== '') {

                const newIncident = {
                    id: Date.now(),
                    title: titleValue,
                    description: descriptionValue,
                    date: dateValue
                };
                incidentsData.push(newIncident);
                renderIncidents(incidentsData);
                incidentForm.reset();
            } else {
                alert('Title must not be empty');
            }
        });
    }
}

function renderEquipmentList(items) {
    const container = document.querySelector('#equipment-container');
    //TODO: Which ops is more efficient? cleaning the container or looking for existing id an skip it.
    container.innerHTML = '';
    items.forEach((equipment) => {
        const statusClass = equipment.status === 'Needs Maintenance' ? 'status-maintenance' : '';
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
function renderIncidents(incidents) {
    const container = document.querySelector('#incident-list-container');
    container.innerHTML = '';
    incidents.forEach((incident) => {
        const incidentHTML = `
            <div class="incident-card">
            <h3>${incident.title}</h3>
            <p>Date: ${incident.date}</p>
            </div>
        `;
        container.innerHTML += incidentHTML;
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