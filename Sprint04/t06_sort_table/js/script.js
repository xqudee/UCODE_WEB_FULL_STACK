placeholder.remove();
notification.remove();

var state;
var parameter;
const ROWS = 10;
const COLS = 3;
var arr = [['Black<br>Panther', 66, 53],
           ['Capitan<br>America', 79, 137],
           ['Capitan<br>Marvel', 97, 26],
           ['Hulk', 80, 49],
           ['Iron<br>Man', 88, 48],
           ['Spider-<br>man', 78, 16],
           ['Thanos', 99, 1000],
           ['Thor', 95, 1000],
           ['Yon-<br>Rogg', 73, 52]];

const mainElement = document.querySelector('main');
var sortBtn = document.createElement('div');
sortBtn.classList.add('press-sort');
mainElement.appendChild(sortBtn);

var table = document.createElement('table');

function createTable(array) {
    table.remove();
    table = document.createElement('table');
    document.body.appendChild(table);

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td = document.createElement('td');
    td.innerHTML = 'Name';
    td.id = 'Name';
    td.classList.add('head')
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = 'Strength';
    td.id = 'Strength';
    td.classList.add('head')
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = 'Age';
    td.id = 'Age';
    td.classList.add('head')
    tr.appendChild(td);

    for (let i = 0; i < ROWS - 1; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < COLS; j++) {
            td = document.createElement('td');
            td.innerHTML = arr[i][j];
            td.classList.add('cell');
            tr.appendChild(td);
        }
    }

    Name.onclick = function() {
        sort(array, 'Name', 0);
        if (state == 0) state = -1;
        else state = 0;
    }

    Strength.onclick = function() {
        sort(array, 'Strenght', 1);
        if (state == 1) state = -1;
        else state = 1;
    }

    Age.onclick = function() {
        sort(array, 'Age', 2);
        if (state == 2) state = -1;
        else state = 2;
    }
}

function sort(array, colName, colInd) {
    sortBtn.style.display = 'flex';
    sortBtn.innerHTML = `Sorting by ${colName}, order: ABC`;
    for (let i = 0; i < ROWS - 2; i++) {
        for (let j = 0; j < ROWS - 2; j++) {
            if (state == colInd) {
                if (array[j][colInd] < array[j + 1][colInd]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    sortBtn.innerHTML = `Sorting by ${colName}, order: DESC`;
                }
            }
            else {
                if (array[j][colInd] > array[j + 1][colInd]) {
                    let temp = arr[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    sortBtn.innerHTML = `Sorting by ${colName}, order: ASC`;
                }
            }
        }
    }
    createTable(array);
}


createTable(arr);