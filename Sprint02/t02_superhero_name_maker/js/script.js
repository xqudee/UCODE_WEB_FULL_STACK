var animal = prompt("What animal is the superhero most similar to?");

if (!/^[a-zA-Z]{1,20}$/.test(animal)) {
    alert("Name must be a single word containing only letters.");
}
else {
    var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

    if (!/^(male|female|)$/i.test(gender)) {
        alert("Gender must be 'male', 'female', or leave it blank.");
    }
    else {
        var age = prompt("How old is the superhero?");
        if (!/^[1-9]\d{0,4}$/.test(age)) {
            alert("Age must be a number greater than zero.");
        }
        else {
            var superheroName = animal + "-";

            if (/^(male)$/i.test(gender)) {
                if (age < 18) superheroName += "boy";
                else superheroName += "man";
            }
            else if (/^(female)$/i.test(gender)) {
                if (age < 18) superheroName += "girl";
                else superheroName += "woman";
            }
            else {
                if (age < 18) superheroName += "kid";
                else superheroName += "hero";
            }

            alert("The superhero name is: " + superheroName + "!");
        }
    }
}
