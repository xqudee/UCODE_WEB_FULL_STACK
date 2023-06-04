var output = "";
const STORAGE_NAME = 'notesArchive';
let textOutput = document.getElementById('output-div');

function getNotes() {
    return localStorage.getItem(STORAGE_NAME);
}

function setNotes(value) {
    localStorage.setItem(STORAGE_NAME, value);
}

function update() {
    let notes = getNotes();
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

    let notesArchive = getNotes();
    if (notesArchive) notesArchive += '<br>-->' + text;
    else notesArchive = '-->' + text;

    let date = new Date();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    let year = date.getFullYear().toString().padStart(2, '0');
    let hour = date.getHours().toString().padStart(2, '0');

    notesArchive += ` [${date.getDate()}.0${date.getMonth() + 1}.${year}, ${hour}:${minutes}:${second}]`;

    setNotes(notesArchive);
    update();
}

function doClear() {
    if (confirm("Are you sure?")) {
        localStorage.removeItem(STORAGE_NAME);
        textOutput.innerHTML = '';
    }
}

update();
