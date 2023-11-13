function updateVar() {
    favicon.href = faviconPaths[localStorage.getItem("faviconNumber")]
    title.innerHTML = titles[localStorage.getItem("titleNumber")]
}

function essentialAssessment() {
    localStorage.setItem("titleNumber", 1);
    localStorage.setItem("faviconNumber", 1);
    updateVar()
}

function patTesting() {
    localStorage.setItem("titleNumber", 2);
    localStorage.setItem("faviconNumber", 2);
    updateVar()
}

function studyladder() {
    localStorage.setItem("titleNumber", 3);
    localStorage.setItem("faviconNumber", 3);
    updateVar()
}

function nothing() {
    localStorage.setItem("titleNumber", 4);
    localStorage.setItem("faviconNumber", 4);
    updateVar()
}

function newTab() {
    localStorage.setItem("titleNumber", 5);
    localStorage.setItem("faviconNumber", 5);
    updateVar()
}

function seesaw() {
    localStorage.setItem("titleNumber", 6);
    localStorage.setItem("faviconNumber", 6);
    updateVar()
}

const favicon = document.getElementById("favicon")
const title = document.getElementById("title")
const titles = [
    "Teaching Berry | Maths",
    "Essential Assessment",
    "Test | ACER Online Assessment and Reporting",
    "Studyladder, online english literacy & mathematics. Kids activity games, worksheets and lesson plans.",
    "",
    "New Tab",
    "Seesaw"
];
const faviconPaths = [
    "assets/icons/teachingberry.png",
    "assets/icons/essentialassessment.png",
    "assets/icons/pattesting.png",
    "assets/icons/studyladder.png",
    "",
    "",
    "assets/icons/seesaw.png"
];

localStorage.setItem("titleNumber", 0);
localStorage.setItem("faviconNumber", 0);
title.onload = updateVar()
favicon.onload = updateVar()

updateVar()