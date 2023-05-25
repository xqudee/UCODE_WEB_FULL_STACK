function addWords(obj, wrds) {
    let words = obj.words.split(" ").filter(wrd => wrd != "");
    let newWords = wrds.split(" ").filter(wrd => wrd != "");

    let tempWords = words + " " + newWords;
    tempWords = tempWords.split(",").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);

    obj.words = tempWords.join(" ");
}

function removeWords(obj, wrds) {
    let words = obj.words.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);
    let removeWords = wrds.split(" ").filter(wrd => wrd != "");

    for (let wrd of removeWords) {
        const ind = words.indexOf(wrd);
        if (ind !== -1) {
            words.splice(ind, 1);
        }
    }
      
    obj.words = words.join(' ');;
}

function changeWords(obj, oldWrds, newWrds) {
    let words = obj.words.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);
    let oldWords = oldWrds.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);
    let newWords = newWrds.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);

    let newInd = 0;
    for (let i = 0; i < oldWords.length; i++) {
        let ind = words.indexOf(oldWords[i]);
        if (ind != -1) {
            words.splice(ind, 1, newWords[newInd++]);
        }
    }

    obj.words = words.join(' ');
}
