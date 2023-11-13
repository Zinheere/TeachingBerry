function updateVar() {
    favicon.href = faviconPaths[0]
    title.innerHTML = titles[0]
}

function essentialAssessment() {
    faviconNumber = 1
    titleNumber = 1
    updateVar()
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
    "assets/icons/teachingberry.png",
    "assets/icons/essentialassessment.png",
];

window.onload = updateVar()
updateVar()