function insertSort(inputArr) {
  // won't mutate input
  let arr = [...inputArr]
  // [0..sortedTill] is a sorted part
  let sortedTill = 0;
  if (arr.length < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    // iterating from current to the left
    for (let q = (i + 1); q > 0; q--) {
      if (arr[q] < arr[q - 1]) {
        const temp = arr[q - 1]
        arr[q - 1] = arr[q]
        arr[q] = temp
      }
    }
  }
  return arr
}

function countingSort(inputArr) {
  const countArr = [];
  inputArr.forEach(el => {
    if (el < 0 || !Number.isInteger(el)) {
      throw Error('elements must be non-negative integers');
    }
    countArr[el] = countArr[el] === undefined ? 1 : countArr[el] + 1
  });
  console.log('inputArr', inputArr)
  console.log('count array before', countArr)
  console.log('countArr length', countArr.length)
  for (let i = 1; i < countArr.length; i++ ) {
    if (countArr[i] === undefined) countArr[i] = 0;
    if (countArr[i - 1] === undefined) countArr[i - 1] = 0;
    countArr[i] = countArr[i-1] + countArr[i];
  }
  console.log('count array after', countArr)
  let resultArr = [];
  inputArr.forEach(value => {
    const newIndex = countArr[value] - 1;
    resultArr[newIndex] = value;
    countArr[value]--;
  })

  return resultArr;
}

exports.insertSort = insertSort
exports.countingSort = countingSort