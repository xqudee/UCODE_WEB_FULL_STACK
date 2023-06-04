class Film {
    constructor (name, date, actors, description, img) {
        this.name = name;
        this.date = date;
        this.actors = actors;
        this.description = description;
        this.img = img;
    }
}

var active = -1;

function loadList(filmsArray) {
    let listContainer = document.getElementById('list-container');
    let list = document.createElement('ul');
    list.classList.add('list-films');
    listContainer.appendChild(list);

    for (let i = 0; i < filmsArray.length; i++) {
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML = filmsArray[i].name;
        li.classList.add('film_name-li');

        if (i == active) li.classList.add('film-active');

        li.onclick = function() {
            loadInfo(filmsArray, i);
        }
    }
    loadInfo(filmsArray, 0);
}

let infoContainer = document.querySelector('.info-container');
let infoContainer1 = document.createElement('div');
infoContainer1.classList.add('info-container1');


let name = document.createElement('h2');
let date = document.createElement('p');
let description = document.createElement('p');
let actors = document.createElement('ul');
let img = document.createElement('img');
actors.classList.add('actors-list');
let li = document.createElement('li');
li.classList.add('actor-li');

infoContainer1.appendChild(name);
infoContainer1.appendChild(date);
infoContainer1.appendChild(actors);
infoContainer1.appendChild(description);

infoContainer.appendChild(infoContainer1);
infoContainer.appendChild(img);
function loadInfo(filmsArray, index) {
    if (index == active) return;

    let temp = document.getElementsByClassName('film_name-li');
    if (active != -1)
        temp[active].classList.remove('film-active');
    temp[index].classList.add('film-active')
    active = index;

    let liElem = document.querySelectorAll('.actor-li');
    if(liElem != null) liElem.forEach(elem => {elem.remove()});
    
    let actorsArr = filmsArray[index].actors;
    for (let i = 0; i < actorsArr.length; i++) {
        li = document.createElement('li');
        actors.appendChild(li);
        li.innerHTML = actorsArr[i];
        li.classList.add('actor-li');
    }

    name.innerHTML = filmsArray[index].name;
    date.innerHTML = filmsArray[index].date;
    description.innerHTML = filmsArray[index].description;
    img.src = filmsArray[index].img;


}

function load(filmsArray) {
    loadList(filmsArray);
}

var filmsArray = new Array(1);

filmsArray[0] = new Film("Avengers: Infinity War", 
                "April 23, 2018",
                ["Robert Downey Jr.", "Chris Hemsworth", "Tom Holland","Chris Evans", "Scarlett Johansson"], 
                "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' Avengers: Inﬁnity War brings to the screen the ultimate showdown of all time. The Avengers and their Super Hero allies must be willing to sacriﬁce all in an attempt to defeat the powerful Thanos.", 
                "assets/images/img1.png");

filmsArray[1] = new Film("Thor: Love and Thunder",
                "July 8, 2022",
                ["Chris Hemsworth", "Natalie Portman", "Christian Bale", "Tessa Thompson", "Taika Waititi"],
                "The film finds Thor (Chris Hemsworth) on a journey unlike anything he’s ever faced – a quest for inner peace. But his retirement is interrupted by a galactic killer known as Gorr the God Butcher (Christian Bale), who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie (Tessa Thompson), Korg (Taika Waititi) and ex-girlfriend Jane Foster (Natalie Portman), who – to Thor’s surprise – inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
                "assets/images/img2.png"
                );

filmsArray[2] = new Film("Guardians of the Galaxy 3",
                "May 5, 2023",
                ["Chris Pratt", "Chukwudi Iwuji", "Terence Rosemore", "Pom Klementieff", "Dave Bautista"],
                "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
                "assets/images/img3.png"
                );


load(filmsArray);