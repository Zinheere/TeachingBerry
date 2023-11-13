function updateVar() {
    favicon.href = faviconPaths[sessionStorage.getItem("faviconNumber")]
    title.innerHTML = titles[sessionStorage.getItem("titleNumber")]
}

function essentialAssessment() {
    sessionStorage.setItem("titleNumber", 1);
    sessionStorage.setItem("faviconNumber", 1);
    updateVar()
}

function patTesting() {
    sessionStorage.setItem("titleNumber", 2);
    sessionStorage.setItem("faviconNumber", 2);
    updateVar()
}

function studyladder() {
    sessionStorage.setItem("titleNumber", 3);
    sessionStorage.setItem("faviconNumber", 3);
    updateVar()
}

function nothing() {
    sessionStorage.setItem("titleNumber", 4);
    sessionStorage.setItem("faviconNumber", 4);
    updateVar()
}

function newTab() {
    sessionStorage.setItem("titleNumber", 5);
    sessionStorage.setItem("faviconNumber", 5);
    updateVar()
}

function seesaw() {
    sessionStorage.setItem("titleNumber", 6);
    sessionStorage.setItem("faviconNumber", 6);
    updateVar()
}

const favicon = document.getElementById("favicon")
const title = document.getElementById("title")
const titles = [
    "Teaching Berry | Maths",
    "Essential Assessment",
    "Test | ACER Online Assessment and Reporting",
    "Studyladder, online english literacy & mathematics. Kids activity games, worksheets and lesson plans.",
    "⠀",
    "New Tab",
    "Seesaw"
];
const faviconPaths = [
    "assets/icons/teachingberry.png",
    "assets/icons/essentialassessment.png",
    "assets/icons/pattesting.png",
    "assets/icons/studyladder.png",
    "assets/icons/empty.png",
    "assets/icons/empty.png",
    "assets/icons/seesaw.png"
];

sessionStorage.setItem("titleNumber", 0);
sessionStorage.setItem("faviconNumber", 0);
title.onload = updateVar()
favicon.onload = updateVar()

updateVar()