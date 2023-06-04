function transformation() {
    let element = document.getElementById('hero');
    let elementDiv = document.getElementById('lab');

    if (element.textContent == 'Bruce Banner') {
        element.innerHTML = "Hulk";
        element.style.fontSize = "130px";
        element.style.letterSpacing = "6px";
        elementDiv.style.background = "#70964b";
    }
    else {
        element.innerHTML = "Bruce Banner";
        element.style.fontSize = "60px";
        element.style.letterSpacing = "2px";
        element.style.color = "#000";
        elementDiv.style.background = "#ffb300";
    }
}