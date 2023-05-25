const FULL = 500;
const DEFAULT_DELAY = 1000;
const DELAY_LOST_CALORIES = 60000;
const EATING_TIME = 10;
const ADD_CALORIES = 200;

class Timer {
    constructor(title, delay, stopCount, mode) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.tickCount = stopCount;
        this.interval = null;
        this.mode = mode;
    }

    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount})`);
        this.interval = setInterval(() => {
            this.tick();
        }, this.delay);
    }

    tick() {
        if (this.mode == -2) {
            speech_img_div.hidden = false;
            human.calories = 0;
            document.getElementById("calories").innerText = human.calories;
            document.getElementById("message").innerText = "I'M HUNGRY!";
            this.stop();
            return;
        }
        if (this.mode == -1) {
            if (human.calories > 0) {
                console.log(`I'm losing calories.`);
                human.lostCalories();
            }
            if (human.calories == 0) {
                speech_img_div.hidden = false;
                document.getElementById("message").innerText = "I'M HUNGRY!";
                this.stop();
                return;
            }
        }
        if (this.mode == 0) { //sleep
            console.log(`I\'m sleeping for ${this.tickCount} seconds.`);
            document.getElementById("message").innerText = `I\'m sleeping for ${this.tickCount}...`;
            if (this.tickCount < 1) document.getElementById("message").innerText = "I'm awake now";
        }
        if (this.mode == 1) { //eat
            console.log(`I\'m eating for ${this.tickCount} seconds.`);
            document.getElementById("message").innerText = `Nom nom nom...`;
            if (this.tickCount < 1) {
                if (human.calories <= FULL) document.getElementById("message").innerText = "I'm still hungry";
            }
        }
        if (this.mode == 1.5) { //full eat
            console.log(`I\'m full.`);
            document.getElementById("message").innerText = `I\'m full.`;
            if (this.tickCount == 0) this.stop();
        }
        if (this.mode == 2) { //fly
            console.log(`I\'m flying for ${this.tickCount} seconds.`);
            document.getElementById("message").innerText = `I\'m flying!`;
            if (this.tickCount == 0) this.stop();
        }
        if (this.mode == 3) { //fight
            console.log(`I\'m fighting for ${this.tickCount} seconds.`);
            if (this.tickCount >= 9) document.getElementById("message").innerText = `Khhhh-chh...`;
            else if (this.tickCount >= 5) document.getElementById("message").innerText = `Bang-g-g-g...`;
            else document.getElementById("message").innerText = `Evil is defeated!`;
            if (this.tickCount == 0) this.stop();
        }
        if (this.mode == 4) { //protect
            console.log(`I\'m protect the city for ${this.tickCount} seconds.`);
            if (this.tickCount >= 8) document.getElementById("message").innerText = `Looking for the enemy...`;
            else if (this.tickCount >= 4) document.getElementById("message").innerText = `Going into battle...`;
            else document.getElementById("message").innerText = `The city is saved!`;
            if (this.tickCount == 0) this.stop();
        }
        this.tickCount--;
        if (this.tickCount == -3) this.stop();
    }

    stop() {
        if (this.mode != -2 && this.mode != -1) {
            document.getElementById("message").innerText = '';
            speech_img_div.hidden = true;
        }
        console.log(`Timer ${this.title } stopped`);
        clearInterval(this.interval);
        document.getElementById("sleep_for").disabled = false;
        document.getElementById("feed").disabled = false;
        document.getElementById("turn_into_superhero").disabled = false;
        document.getElementById("fly").disabled = false;
        document.getElementById("fight").disabled = false;
        document.getElementById("protect").disabled = false;
    }
}

function runTimer(id, delay, counter, mode){
    let temp = new Timer(id, delay, counter, mode);
    temp.start();
}


class Human {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 200;
        this.imgSrc = "./assets/images/human.png";
        this.speechSrc = "./assets/images/blue_speech.png";

        speech_img_div.hidden = true;
        runTimer("lost_calories", DELAY_LOST_CALORIES, 100_000, -1);
    }

    sleepFor() {
        human.disabledButtons();
        const seconds = prompt("Enter the number of seconds to sleep:");
        runTimer("sleep", DEFAULT_DELAY, seconds, 0);
    }

    feed() {
        human.disabledButtons();
        if (human.calories <= FULL) {
            human.calories += ADD_CALORIES;
            document.getElementById("calories").innerText = human.calories;
            runTimer("feed", DEFAULT_DELAY, EATING_TIME, 1);
        }
        else runTimer("feed", DEFAULT_DELAY, 3, 1.5);
    }

    lostCalories() {
        human.calories -= 100;
        document.getElementById("calories").innerText = human.calories;
    }

    disabledButtons() {
        document.getElementById("sleep_for").disabled = true;
        document.getElementById("feed").disabled = true;
        document.getElementById("turn_into_superhero").disabled = true;
        document.getElementById("fly").disabled = true;
        document.getElementById("fight").disabled = true;
        document.getElementById("protect").disabled = true;
        speech_img_div.hidden = false;
    }
}

class Superhero extends Human {
    constructor (firstName, lastName, gender, age, calories, superpower) {
        super(firstName, lastName, gender, age, calories);
        this.superpower = superpower;
        this.imgSrc = "./assets/images/superhero.png";
        this.speechSrc = "./assets/images/green_speech.png";

        this.update();
    }

    update() {
        document.getElementById("superhero_buttons").style.display = "flex";
        document.getElementById("superpower").hidden = false;
        document.getElementById("superpower").innerText = `Superpower: ${this.superpower}`;
        document.getElementById("human_img").src = this.imgSrc;
        document.getElementById("speech_img").src = this.speechSrc;

        document.getElementById("first_div").style.background = "#8FED6F";
        document.getElementById("sleep_for").style.background = "#E3FCE2";
        document.getElementById("feed").style.background = "#E3FCE2";
    }

    fly() {
        human.disabledButtons();
        runTimer("fly", DEFAULT_DELAY, 10, 2);
    }

    fightWithEvil() {
        human.disabledButtons();
        runTimer("fight", DEFAULT_DELAY, 12, 3);
    }

    protectCity() {
        human.disabledButtons();
        runTimer("protect", DEFAULT_DELAY, 12, 4);
    }

}

let firstName = prompt("Enter first name", "Silver");
let lastName = prompt("Enter last name", "Fox");
let age = prompt("Age?", 25);
let gender = prompt("Gender?", "male");
document.getElementById("superpower").hidden = true;

human = new Human(firstName, lastName, gender, age);

sleep_for.onclick = human.sleepFor;
feed.onclick = human.feed;

function turnIntoSuperhero() {
    if (human.calories > 500) {
        superpower = prompt("Enter superpower", "none");
        document.getElementById("switch_btn").style.display = "none";
        superhero = new Superhero(firstName, lastName, gender, age, human.calories, superpower);
        sleep_for.onclick = superhero.sleepFor;
        feed.onclick = superhero.feed;
        fly.onclick = superhero.fly;
        fight.onclick = superhero.fightWithEvil;
        protect.onclick = superhero.protectCity;
    }
}

document.getElementById("full_name").innerText = `${human.firstName} ${human.lastName}`;
document.getElementById("age").innerText = `Age: ${human.age}`;
document.getElementById("gender").innerText = `Gender: ${human.gender}`;
document.getElementById("calories").innerText = `Calories: ${human.calories}`;
document.getElementById("human_img").src = human.imgSrc;
document.getElementById("speech_img").src = human.speechSrc;

runTimer("start", 5000, 1, -2);