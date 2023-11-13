function updateVar() {
    favicon.href = faviconPaths[0]
    title.innerHTML = titles[0]
}

function essentialAssessment() {
    favicon.href = faviconPaths[faviconNumber]
    title.innerHTML = titles[titleNumber]
}

const favicon = document.getElementById("favicon")
const title = document.getElementById("favicon")
var faviconNumber = 0
var titleNumber = 0
const titles = [
    "Teaching Berry | Maths",
    "Essential Assessment",
];
const faviconPaths = [
    "assets/icons/teachingberry",
    "assets/icons/essentialassessment",
];

window.onload = updateVar()
updateVar()