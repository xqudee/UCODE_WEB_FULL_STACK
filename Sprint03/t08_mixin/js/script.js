let houseMixin = {
    wordReplace(str1, str2) {
        this.description = this.description.replace(str1, str2);
    },

    wordInsertAfter(str1, str2) {
        this.description = this.description.replace(str1, str1 + ' ' + str2);
    },

    wordDelete(str) {
        this.description = this.description.replace(str, "");
    },

    wordEncrypt() {
        function rot13(str) {
            str = str.replace(/[a-zA-Z]/g, function(char) {
                const charCode = char.charCodeAt(0);
                if ((char >= 'a' && char <= 'm') || (char >= 'A' && char <= 'M'))
                    return String.fromCharCode(charCode + 13);
                else if ((char >= 'n' && char <= 'z') || (char >= 'N' && char <= 'Z'))
                    return String.fromCharCode(charCode - 13);
            });
            return str;
        }
        this.description = this.description.replace(this.description, rot13(this.description));
    },

    wordDecrypt() {
        this.wordEncrypt();
    }
}

/*
const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith', 110, 5);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild()); 
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
*/