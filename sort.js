
function bubbleSort(inputArr) {
  const arr = [...inputArr]
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function insertionSort(arr) {
  console.log(arr)
  // start with second, because first is already sorted
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    // with j we iterate over sorted part of the array, it holds
    // the item under considiration from sorted part of the input array.
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        // "move" item to the right if we will have to dig deeper
        // this will overwrite arr[i] on first iteration; it will increase
        // sorted array size and we won't lose arr[i] because we hold it
        // in `current`
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    // This was hard to figure out.
    // 1) If we broke out of the loop because arr[j] is bigger then current,
    // we need to save current AFTER arr[j].
    // 2) If we never encountered a bigger sorted item then the one we are
    // currently inserting, we'll go through the whole loop, and it will
    // decrease j one more time on exit, to -1. We need 0.
    //
    // So for both cases we need to increase j by 1 to put `current` there.
    arr[j + 1] = current;
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

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  const middle = Math.round(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // recurse
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // merge
  const sorted = []
  while (sortedLeft.length > 0 || sortedRight.length > 0) {
    if (sortedLeft.length === 0) {
      sorted.push(sortedRight.shift())
      continue
    }
    if (sortedRight.length === 0) {
      sorted.push(sortedLeft.shift())
      continue
    }

    sortedLeft[0] <= sortedRight[0]
      ? sorted.push(sortedLeft.shift())
      : sorted.push(sortedRight.shift())
  }
  return sorted
}

function quickSort(inputArr) {
  if (inputArr.length <= 1) return inputArr;

  const less = [], equal = [], more = [];

  const pivot = inputArr[0];

  inputArr.forEach(el => {
    if (el < pivot) less.push(el)
    if (el === pivot) equal.push(el)
    if (el > pivot) more.push(el)
  })

  const sortedLess = quickSort(less);
  const sortedMore = quickSort(more);
  return [...sortedLess, ...equal, ...sortedMore]
}

exports.bubbleSort = bubbleSort
exports.countingSort = countingSort
exports.insertionSort = insertionSort
exports.mergeSort = mergeSort
exports.quickSort = quickSort