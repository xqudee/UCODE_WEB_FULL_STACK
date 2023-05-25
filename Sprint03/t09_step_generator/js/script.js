function *generator() {
    var num = 1;

    while(true) {
        var userNum = prompt(`Previous result: ${num}. Enter a new number:`);
        if (isNaN(userNum)) {
            console.error("Invalid number!");
            break;
        }
        let newNum = Number(userNum);
        if (newNum == undefined || newNum == "") {
            console.error("Invalid number!");
            break;
        }
        num += newNum;
        
        if (num > 10000) num = 1;
    }
}

let gen = generator();
gen.next().value;
