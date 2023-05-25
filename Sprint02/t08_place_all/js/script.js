function sortEvenOdd(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] % 2 == 0 && arr[i + 1] % 2 != 0) continue;
            if (arr[i] > arr[i + 1] || (arr[i] % 2 != 0 && arr[i + 1] % 2 == 0)) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}
