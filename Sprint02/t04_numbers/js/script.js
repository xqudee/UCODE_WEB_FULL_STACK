function checkDivision(beginRange, endRange) {
    if (beginRange == undefined || beginRange.length == 0) beginRange = 1;
    if (endRange == undefined || endRange.length == 0) endRange = 100;

    for (let i = beginRange; i <= endRange; i++) {
        var str = i;
        if (i % 2 != 0 && i % 3 != 0 && i % 10 != 0) {
            str += " -";
        }
        else {
            if (i % 2 == 0) {
                str += " is even";
                if (i % 3 == 0 || i % 10 == 0) str += ",";
            }
            if (i % 3 == 0) {
                str += " a multiple of 3";
                if (i % 10 == 0) str += ",";
            }
            if (i % 10 == 0) {
                str += " a multiple of 10";
            }
        }
        console.log(str);
    }
}

var start = prompt("Enter the start of the range");
var end = prompt("Enter the end of the range");
checkDivision(start, end);
