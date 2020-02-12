const basicArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type analyzedArray = {
  arrayLength: number,
  amountOfOddNumbers: number,
  sumOfElements: number,
};

function analyzeArray(array: number[]): analyzedArray {

  let amountOfOdd: number = 0;
  let sum: number = 0;

  for (let i: number = 0; i < array.length; i++) {
    sum += i;
    if (i % 2 === 1) {
      amountOfOdd += 1;
    }
  }

  const result: analyzedArray = {
    arrayLength: array.length,
    amountOfOddNumbers: amountOfOdd,
    sumOfElements: sum,
  };

  return result;

}

console.log(analyzeArray(basicArray));