var output = "";
const COOKIE_NAME = 'notesArchive';
const DAYS = 30;
let textOutput = document.getElementById('output-div');

function getCookie() {
    let name = COOKIE_NAME + '=';
    let allCookies = document.cookie.split(';');
    for (let i = 0; i < allCookies.length; i++) {
        let cookie = allCookies[i];    
        while(cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        console.log(cookie);  
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }

    }
    return null;
}

function setCookie(value, days) {
    let expires = '';
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = COOKIE_NAME + '=' + (value || '') + expires + '; path=/';
}

function update() {
    let notes = getCookie();
    if (notes) {
        textOutput.innerHTML = notes;
    }
    else textOutput.innerHTML = '[Empty]';
}

function doAdd() {
    var textInput = document.getElementById('input-div');
    var text = textInput.value.trim();

    if (text == '') {
        alert('It\'s empty. Try to input something in "Text input"');
        return;
    }

    let notesArchive = getCookie();
    if (notesArchive) notesArchive += '<br>-->' + text;
    else notesArchive = '-->' + text;

    setCookie(notesArchive, DAYS);
    update();
}

function doClear() {
    if (confirm("Are you sure?")) {
        textOutput.innerHTML = '';
    }
}

update();
