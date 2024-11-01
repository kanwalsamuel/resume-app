// Select elements
 const photoUpload = document.getElementById("photoUpload") as HTMLInputElement;
const photoPreview = document.getElementById("photoPreview") as HTMLImageElement;

// Personal Information Fields
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;

// Preview Section Elements
const previewName = document.getElementById("preview-name") as HTMLElement;
const previewEmail = document.getElementById("preview-email") as HTMLElement;
const previewPhone = document.getElementById("preview-phone") as HTMLElement;
const previewImage = document.getElementById("preview-image") as HTMLImageElement;
const previewEducation = document.getElementById("preview-education") as HTMLElement;
const previewExperience = document.getElementById("preview-experience") as HTMLElement;
const previewLanguages = document.getElementById("preview-languages") as HTMLElement;
const previewAchievements = document.getElementById("preview-achievements") as HTMLElement;
const previewReferences = document.getElementById("preview-references") as HTMLElement;
const previewSkills = document.getElementById("preview-skills") as HTMLElement;
const previewInterests = document.getElementById("preview-interests") as HTMLElement;

// Functions for Section Management
function addSection(sectionId: string, content: string) {
    const section = document.getElementById(sectionId) as HTMLElement;
    const newEntry = document.createElement("div");
    newEntry.className = `${sectionId}-entry`;
    newEntry.innerHTML = content;
    section.appendChild(newEntry);
}

function removeSection(button: HTMLButtonElement) {
    button.parentElement?.remove();
    updatePreview();
}

// Add and Remove Handlers
function addEducation() {
    addSection("education-fields", `
        <input type="text" placeholder="Degree" required>
        <input type="text" placeholder="Institution" required>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

function addExperience() {
    addSection("experience-fields", `
        <input type="text" placeholder="Job Title" required>
        <input type="text" placeholder="Company" required>
        <textarea placeholder="Job Description"></textarea>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

function addLanguage() {
    addSection("language-fields", `
        <input type="text" placeholder="Language" required>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

function addAchievement() {
    addSection("achievement-fields", `
        <input type="text" placeholder="Achievement" required>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

function addReference() {
    addSection("reference-fields", `
        <input type="text" placeholder="Reference Name" required>
        <input type="text" placeholder="Contact Information" required>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

function addSkill() {
    addSection("skill-fields", `
        <input type="text" placeholder="Skill" required>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

function addInterest() {
    addSection("interest-fields", `
        <input type="text" placeholder="Interest" required>
        <button type="button" onclick="removeSection(this)">Remove</button>
    `);
}

// Update Preview
function updatePreview() {
    // Update Personal Information
    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewPhone.textContent = phoneInput.value;

    // Update Education Preview
    previewEducation.innerHTML = "";
    document.querySelectorAll(".education-fields-entry").forEach(entry => {
        const degree = (entry.querySelector("input:nth-of-type(1)") as HTMLInputElement).value;
        const institution = (entry.querySelector("input:nth-of-type(2)") as HTMLInputElement).value;
        if (degree && institution) {
            const listItem = document.createElement("li");
            listItem.textContent = `${degree} from ${institution}`;
            previewEducation.appendChild(listItem);
        }
    });

    // Update Experience Preview
    previewExperience.innerHTML = "";
    document.querySelectorAll(".experience-fields-entry").forEach(entry => {
        const jobTitle = (entry.querySelector("input:nth-of-type(1)") as HTMLInputElement).value;
        const company = (entry.querySelector("input:nth-of-type(2)") as HTMLInputElement).value;
        const description = (entry.querySelector("textarea") as HTMLTextAreaElement).value;
        if (jobTitle && company) {
            const listItem = document.createElement("li");
            listItem.textContent = `${jobTitle} at ${company} - ${description}`;
            previewExperience.appendChild(listItem);
        }
    });

    // Update Languages Preview
    previewLanguages.innerHTML = "";
    document.querySelectorAll(".language-fields-entry").forEach(entry => {
        const language = (entry.querySelector("input") as HTMLInputElement).value;
        if (language) {
            const listItem = document.createElement("li");
            listItem.textContent = language;
            previewLanguages.appendChild(listItem);
        }
    });

    // Update Achievements Preview
    previewAchievements.innerHTML = "";
    document.querySelectorAll(".achievement-fields-entry").forEach(entry => {
        const achievement = (entry.querySelector("input") as HTMLInputElement).value;
        if (achievement) {
            const listItem = document.createElement("li");
            listItem.textContent = achievement;
            previewAchievements.appendChild(listItem);
        }
    });

    // Update References Preview
    previewReferences.innerHTML = "";
    document.querySelectorAll(".reference-fields-entry").forEach(entry => {
        const refName = (entry.querySelector("input:nth-of-type(1)") as HTMLInputElement).value;
        const refContact = (entry.querySelector("input:nth-of-type(2)") as HTMLInputElement).value;
        if (refName && refContact) {
            const listItem = document.createElement("li");
            listItem.textContent = `${refName} - ${refContact}`;
            previewReferences.appendChild(listItem);
        }
    });

    // Update Skills Preview
    previewSkills.innerHTML = "";
    document.querySelectorAll(".skill-fields-entry").forEach(entry => {
        const skill = (entry.querySelector("input") as HTMLInputElement).value;
        if (skill) {
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            previewSkills.appendChild(listItem);
        }
    });

    // Update Interests Preview
    previewInterests.innerHTML = "";
    document.querySelectorAll(".interest-fields-entry").forEach(entry => {
        const interest = (entry.querySelector("input") as HTMLInputElement).value;
        if (interest) {
            const listItem = document.createElement("li");
            listItem.textContent = interest;
            previewInterests.appendChild(listItem);
        }
    });
}

// Image Upload
photoUpload.addEventListener("change", () => {
    const file = photoUpload.files ? photoUpload.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
});

// Resume Generation and Download
function generateCV() {
    updatePreview();
}

function printCV() {
    window.print();
}

// Button Event Listeners
(document.getElementById("generateButton") as HTMLButtonElement).onclick = generateCV;
(document.getElementById("downloadButton") as HTMLButtonElement).onclick = printCV;
(document.getElementById("addEducationButton") as HTMLButtonElement).onclick = addEducation;
(document.getElementById("addExperienceButton") as HTMLButtonElement).onclick = addExperience;
(document.getElementById("addLanguageButton") as HTMLButtonElement).onclick = addLanguage;
(document.getElementById("addAchievementButton") as HTMLButtonElement).onclick = addAchievement;
(document.getElementById("addReferenceButton") as HTMLButtonElement).onclick = addReference;
(document.getElementById("addSkillButton") as HTMLButtonElement).onclick = addSkill;
(document.getElementById("addInterestButton") as HTMLButtonElement).onclick = addInterest;
