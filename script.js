function updateVar() {
    favicon.href = faviconPaths[localStorage.getItem(faviconNumber)]
    title.innerHTML = titles[localStorage.getItem(titleNumber)]
}

function essentialAssessment() {
    localStorage.setItem("titleNumber", 1);
    localStorage.setItem("faviconNumber", 1);
    updateVar()
}

const favicon = document.getElementById("favicon")
const title = document.getElementById("favicon")
const titles = [
    "Teaching Berry | Maths",
    "Essential Assessment",
];
const faviconPaths = [
    "assets/icons/teachingberry.png",
    "assets/icons/essentialassessment.png",
];

localStorage.setItem("titleNumber", 0);
localStorage.setItem("faviconNumber", 0);
window.onload = updateVar()
updateVar()