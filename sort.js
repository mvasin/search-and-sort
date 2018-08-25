
function bubbleSort(unsortedArr) {
  const arr = [...unsortedArr];
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

function insertionSort(inputArr) {
  const arr = [...inputArr];

  // first is already sorted
  // [0..i] - sorted subarray
  // [i+1..arr.length-1] - yet unsorted
  for (let i = 1; i < arr.length; i++) {
    const elToInsert = arr[i];

    let j;

    // iterate over sorted array [0..i-1] to see where elToInsert fits
    // arr[i] does not belong to the sorted subarray yet, so
    // we don't iterate over it
    for (j = i - 1; j >= 0; j--) {

      // if elToInsert is bigger then current, elToInsert
      // will have to fall through further, and we move current sorted
      // element to the next right position to free up space for
      // future insertion
      if (arr[j] > elToInsert) {

        // it's OK to overwrite the first element from unsorted part,
        // because we hold it in elToInsert variable
        arr[j + 1] = arr[j]
      } else break;
    }
    
    // now j contains the index of the first element in sorted array
    // that is bigger then elToInsert. So elToInsert must be inserted
    // to the right.
    //
    // Edge case 1: if all elements in the sorted array happened to
    // be smaller, the very first element will be duplicated at [0] and [1].
    arr[j + 1] = elToInsert;
  }

  return arr;
}

function countingSort(unsortedArr) {
  const countArr = [];
  unsortedArr.forEach(el => {
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
  unsortedArr.forEach(value => {
    const newIndex = countArr[value] - 1;
    resultArr[newIndex] = value;
    countArr[value]--;
  })

  return resultArr;
}

exports.bubbleSort = bubbleSort
exports.countingSort = countingSort
exports.insertionSort = insertionSort