function total(addCount = 0, addPrice = 0, currentTotal = 0) {
    currentTotal += addCount * addPrice;
    console.log(currentTotal);
    return currentTotal;
}
