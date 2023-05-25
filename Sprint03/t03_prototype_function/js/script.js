Object.assign(String.prototype, { 
    removeDuplicates() {
        str = str.split(' ').filter(wrd => wrd != '');
        str = str.filter((tempVal, tempInd, arrStr) => arrStr.indexOf(tempVal) == tempInd);
        return str.join(' ');
    }
});

/*
let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
*/