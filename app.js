// Select elements
// const photoUpload = document.getElementById("photoUpload") as HTMLInputElement;
var photoPreview = document.getElementById("photoPreview");
// Personal Information Fields
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
// Preview Section Elements
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewPhone = document.getElementById("preview-phone");
var previewImage = document.getElementById("preview-image");
var previewEducation = document.getElementById("preview-education");
var previewExperience = document.getElementById("preview-experience");
var previewLanguages = document.getElementById("preview-languages");
var previewAchievements = document.getElementById("preview-achievements");
var previewReferences = document.getElementById("preview-references");
var previewSkills = document.getElementById("preview-skills");
var previewInterests = document.getElementById("preview-interests");
// Functions for Section Management
function addSection(sectionId, content) {
    var section = document.getElementById(sectionId);
    var newEntry = document.createElement("div");
    newEntry.className = "".concat(sectionId, "-entry");
    newEntry.innerHTML = content;
    section.appendChild(newEntry);
}
function removeSection(button) {
    var _a;
    (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    updatePreview();
}
// Add and Remove Handlers
function addEducation() {
    addSection("education-fields", "\n        <input type=\"text\" placeholder=\"Degree\" required>\n        <input type=\"text\" placeholder=\"Institution\" required>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
function addExperience() {
    addSection("experience-fields", "\n        <input type=\"text\" placeholder=\"Job Title\" required>\n        <input type=\"text\" placeholder=\"Company\" required>\n        <textarea placeholder=\"Job Description\"></textarea>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
function addLanguage() {
    addSection("language-fields", "\n        <input type=\"text\" placeholder=\"Language\" required>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
function addAchievement() {
    addSection("achievement-fields", "\n        <input type=\"text\" placeholder=\"Achievement\" required>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
function addReference() {
    addSection("reference-fields", "\n        <input type=\"text\" placeholder=\"Reference Name\" required>\n        <input type=\"text\" placeholder=\"Contact Information\" required>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
function addSkill() {
    addSection("skill-fields", "\n        <input type=\"text\" placeholder=\"Skill\" required>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
function addInterest() {
    addSection("interest-fields", "\n        <input type=\"text\" placeholder=\"Interest\" required>\n        <button type=\"button\" onclick=\"removeSection(this)\">Remove</button>\n    ");
}
// Update Preview
function updatePreview() {
    // Update Personal Information
    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewPhone.textContent = phoneInput.value;
    // Update Education Preview
    previewEducation.innerHTML = "";
    document.querySelectorAll(".education-fields-entry").forEach(function (entry) {
        var degree = entry.querySelector("input:nth-of-type(1)").value;
        var institution = entry.querySelector("input:nth-of-type(2)").value;
        if (degree && institution) {
            var listItem = document.createElement("li");
            listItem.textContent = "".concat(degree, " from ").concat(institution);
            previewEducation.appendChild(listItem);
        }
    });
    // Update Experience Preview
    previewExperience.innerHTML = "";
    document.querySelectorAll(".experience-fields-entry").forEach(function (entry) {
        var jobTitle = entry.querySelector("input:nth-of-type(1)").value;
        var company = entry.querySelector("input:nth-of-type(2)").value;
        var description = entry.querySelector("textarea").value;
        if (jobTitle && company) {
            var listItem = document.createElement("li");
            listItem.textContent = "".concat(jobTitle, " at ").concat(company, " - ").concat(description);
            previewExperience.appendChild(listItem);
        }
    });
    // Update Languages Preview
    previewLanguages.innerHTML = "";
    document.querySelectorAll(".language-fields-entry").forEach(function (entry) {
        var language = entry.querySelector("input").value;
        if (language) {
            var listItem = document.createElement("li");
            listItem.textContent = language;
            previewLanguages.appendChild(listItem);
        }
    });
    // Update Achievements Preview
    previewAchievements.innerHTML = "";
    document.querySelectorAll(".achievement-fields-entry").forEach(function (entry) {
        var achievement = entry.querySelector("input").value;
        if (achievement) {
            var listItem = document.createElement("li");
            listItem.textContent = achievement;
            previewAchievements.appendChild(listItem);
        }
    });
    // Update References Preview
    previewReferences.innerHTML = "";
    document.querySelectorAll(".reference-fields-entry").forEach(function (entry) {
        var refName = entry.querySelector("input:nth-of-type(1)").value;
        var refContact = entry.querySelector("input:nth-of-type(2)").value;
        if (refName && refContact) {
            var listItem = document.createElement("li");
            listItem.textContent = "".concat(refName, " - ").concat(refContact);
            previewReferences.appendChild(listItem);
        }
    });
    // Update Skills Preview
    previewSkills.innerHTML = "";
    document.querySelectorAll(".skill-fields-entry").forEach(function (entry) {
        var skill = entry.querySelector("input").value;
        if (skill) {
            var listItem = document.createElement("li");
            listItem.textContent = skill;
            previewSkills.appendChild(listItem);
        }
    });
    // Update Interests Preview
    previewInterests.innerHTML = "";
    document.querySelectorAll(".interest-fields-entry").forEach(function (entry) {
        var interest = entry.querySelector("input").value;
        if (interest) {
            var listItem = document.createElement("li");
            listItem.textContent = interest;
            previewInterests.appendChild(listItem);
        }
    });
}
// Image Upload
photoUpload.addEventListener("change", function () {
    var file = photoUpload.files ? photoUpload.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            previewImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
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
document.getElementById("generateButton").onclick = generateCV;
document.getElementById("downloadButton").onclick = printCV;
document.getElementById("addEducationButton").onclick = addEducation;
document.getElementById("addExperienceButton").onclick = addExperience;
document.getElementById("addLanguageButton").onclick = addLanguage;
document.getElementById("addAchievementButton").onclick = addAchievement;
document.getElementById("addReferenceButton").onclick = addReference;
document.getElementById("addSkillButton").onclick = addSkill;
document.getElementById("addInterestButton").onclick = addInterest;
