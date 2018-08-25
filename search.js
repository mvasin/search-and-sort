// Tries are for big O debugging

function linearSearch(stack, needle) {
  let index = -1
  let i

  for (i = 0; i < stack.length; i++) {
    if (stack[i] === needle) return {index: i, tries: i + 1}
  }

  // if we found nothing
  return {index, tries: i + 1}
}

function binarySearch(stack, needle) {
  let tries = 0;
  let index = -1;
  let middleIdx = Math.floor(stack.length / 2)
  let maxTries = Math.log2(stack.length) + 1

  while (true) {
    tries++;

    // success exit case
    if (stack[middleIdx] === needle) return ({index: middleIdx, tries})
    
    // didn't find...
    // ...and nothing else to divide
    if (middleIdx === 0) return ({index: middleIdx, tries})
    // ...there is something to divide
    // left or right?
    // if left is bigger, go left
    if (stack[middleIdx] > needle) {
      middleIdx = Math.floor(middleIdx / 2);
    // else go right
    } else {
      middleIdx = Math.floor((middleIdx + (stack.length - middleIdx) / 2 ));
    }
    if (tries > maxTries) throw new Error('exceeded maxTries')
  }
}

exports.linearSearch = linearSearch
exports.binarySearch = binarySearch