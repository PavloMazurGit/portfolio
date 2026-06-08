const projectBtn = document.querySelector('#project-more-details');
const projectPopup = document.getElementById('project-popup');
const projectClose = document.getElementById('project-close-popup');

const skillBtn = document.querySelector('#skill-more-details');
const skillPopup = document.getElementById('skill-popup');
const skillClose = document.getElementById('skill-close-popup');

/* ================= HELPERS ================= */

function closeAllPopups() {
    projectPopup.classList.remove('active');
    skillPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function updateBodyScroll() {
    const anyActive =
        projectPopup.classList.contains('active') ||
        skillPopup.classList.contains('active');

    document.body.classList.toggle('no-scroll', anyActive);
}

/* ================= TOGGLE FUNCTION ================= */

function togglePopup(popupToOpen, popupToClose) {
    const isActive = popupToOpen.classList.contains('active');

    if (isActive) {
        popupToOpen.classList.remove('active');
    } else {
        popupToClose.classList.remove('active');
        popupToOpen.classList.add('active');
    }

    updateBodyScroll();
}

/* ================= PROJECT ================= */

projectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopup(projectPopup, skillPopup);
});

projectClose.addEventListener('click', () => {
    projectPopup.classList.remove('active');
    updateBodyScroll();
});

/* ================= SKILL ================= */

if (skillBtn) {
    skillBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePopup(skillPopup, projectPopup);
    });
}

if (skillClose) {
    skillClose.addEventListener('click', () => {
        skillPopup.classList.remove('active');
        updateBodyScroll();
    });
}

/* ================= OUTSIDE CLICK ================= */

document.addEventListener('click', (e) => {
    const clickedInsideProject = projectPopup.contains(e.target) || projectBtn.contains(e.target);
    const clickedInsideSkill = skillPopup.contains(e.target) || (skillBtn && skillBtn.contains(e.target));

    if (!clickedInsideProject) {
        projectPopup.classList.remove('active');
    }

    if (!clickedInsideSkill) {
        skillPopup.classList.remove('active');
    }

    updateBodyScroll();
});