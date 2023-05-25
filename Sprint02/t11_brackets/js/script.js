function checkBrackets(str) {
    if ((typeof str != 'string') || (str.indexOf("(") == -1 && str.indexOf(")") == -1)) return -1;

    let count = 0;
    let count1 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') count++;
        if (str[i] == ')') {
            count--;
            if (count < 0) {
              count1++;
              count = 0;
            }
        }
    }

    return count + count1;
}
