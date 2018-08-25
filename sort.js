
function bubbleSort(inputArr) {
  const arr = [...inputArr];
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] <= arr[j + 1]) continue;
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  return arr;
}

function countingSort(inputArr) {
  const countArr = [];
  inputArr.forEach(el => {
    if (el < 0 || !Number.isInteger(el)) {
      throw Error('elements must be non-negative integers');
    }
    countArr[el] = countArr[el] === undefined ? 1 : countArr[el] + 1
  });

  for (let i = 1; i < countArr.length; i++ ) {
    if (countArr[i] === undefined) countArr[i] = 0;
    if (countArr[i - 1] === undefined) countArr[i - 1] = 0;
    countArr[i] = countArr[i-1] + countArr[i];
  }

  let resultArr = [];
  inputArr.forEach(value => {
    const newIndex = countArr[value] - 1;
    resultArr[newIndex] = value;
    countArr[value]--;
  })

  return resultArr;
}

exports.bubbleSort = bubbleSort
exports.countingSort = countingSort