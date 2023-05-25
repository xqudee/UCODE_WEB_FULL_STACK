function concat(string1, string2) {
    let count = 0;

    if (string1 == undefined || string2 == undefined) {
        function func1() {
            count++;
            func1.count = count;
            var str2 = prompt('Enter the string');
            return string1 + " " + str2;
        }

        return func1;
    }
    return string1 + ' ' + string2;
}
