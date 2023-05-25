const validator = {
    get(target, property) {
        console.log(`Trying to access the property\'${property}\'...`);
        if (!(property in target)) return false;
        return target[property];
    },
    set(target, property, value) {
        if (property == 'age') {
            if (!Number.isInteger(value)) 
                throw new Error("The age is not an integer");
            if (value < 0 || value > 200) 
                throw new Error("The age is invalid");
        }
        console.log(`Setting value \'${value}\' to \'${property}\'`);
        target[property] = value;
        return true;
    }
}

/*
let person1 = new Proxy({}, validator);

person1.age = 100;
// Setting value '100' to 'age'
console.log(person1.age);
// Trying to access the property 'age'...
// 100
person1.gender = "male";
// Setting value 'male' to 'gender'
person1.age = 'young';
// Uncaught TypeError: The age is not an integer
person1.age = 300;
// Uncaught RangeError: The age is invalid
*/