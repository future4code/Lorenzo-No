const basicArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function analyzeArray(array) {
    let amountOfOdd = 0;
    let sum = 0;
    for (let i = 0; i <= array.length; i++) {
        sum += i;
        if (i % 2 === 1) {
            amountOfOdd += 1;
        }
    }
    const result = {
        arrayLength: array.length,
        amountOfOddNumbers: amountOfOdd,
        sumOfElements: sum,
    };
    return result;
}
console.log(analyzeArray(basicArray));
//# sourceMappingURL=ex1.js.map