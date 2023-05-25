function copyObj(obj) {
    let copyUser = new Object();
    for (let key in obj) {
        copyUser[key] = obj[key];
    }

    return copyUser;
}