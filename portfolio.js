const moreBtn = document.querySelector('#project-card-more');
const projectPopup = document.getElementById('project-popup');
const projectClosePopup = document.getElementById('project-close-popup');

const skillBtn = document.querySelector('.skill-card-more');
const skillPopup = document.getElementById('skill-popup');
const skillClosePopup = document.getElementById('skill-close-popup');

/* ================= PROJECT POPUP ================= */

moreBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isActive = projectPopup.classList.contains("active");

    if (isActive) {
        projectPopup.classList.remove("active");
    } else {
        skillPopup.classList.remove("active");

        projectPopup.classList.add("active");
    }

    document.body.classList.toggle("no-scroll",
        projectPopup.classList.contains("active") ||
        skillPopup.classList.contains("active")
    );
});

projectClosePopup.addEventListener("click", () => {
    projectPopup.classList.remove("active");
    document.body.classList.remove("no-scroll");
});

/* ================= SKILL POPUP ================= */

if (skillBtn) {
    skillBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        const isActive = skillPopup.classList.contains("active");

        if (isActive) {
            skillPopup.classList.remove("active");
        } else {
            projectPopup.classList.remove("active");

            skillPopup.classList.add("active");
        }

        document.body.classList.toggle("no-scroll",
            projectPopup.classList.contains("active") ||
            skillPopup.classList.contains("active")
        );
    });
}

if (skillClosePopup) {
    skillClosePopup.addEventListener("click", () => {
        skillPopup.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}

/* ================= OUTSIDE CLICK ================= */

document.addEventListener("click", (e) => {

    const clickInsideProject = projectPopup.contains(e.target);
    const clickProjectBtn = moreBtn.contains(e.target);

    const clickInsideSkill = skillPopup.contains(e.target);
    const clickSkillBtn = skillBtn && skillBtn.contains(e.target);

    if (!clickInsideProject && !clickProjectBtn) {
        projectPopup.classList.remove("active");
    }

    if (!clickInsideSkill && !clickSkillBtn) {
        skillPopup.classList.remove("active");
    }

    if (
        !projectPopup.classList.contains("active") &&
        !skillPopup.classList.contains("active")
    ) {
        document.body.classList.remove("no-scroll");
    }
});