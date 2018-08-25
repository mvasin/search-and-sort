const assert = require('assert');
const { linearSearch, binarySearch } = require('../search.js')
const { bubbleSort, countingSort, insertionSort, mergeSort, quickSort }
  = require('../sort.js')

describe('Searching algorithms', function() {
  describe('#linearSearch()', () => {
    const testArr = [1, 7, 4, 2, 6, 3];

    it('should return -1 when the value is not present', function() {
      assert.equal(linearSearch(testArr, 11).index, -1);
    });
  
    it('should return index when the value is present', function() {
      assert.equal(linearSearch(testArr, 7).index, 1);
    });
  
    it('empty array should return -1', function() {
      assert.equal(linearSearch([], 1).index, -1);
    });
    it('should not try more then needed', function() {
      const testArr = [1, 7, 4, 2, 6, 3]
      const maxTries = testArr.length;
      assert.equal(linearSearch(testArr, 3).tries, maxTries);
    });
  });

  describe('#binarySearch()', () => {
    const testArr = [1, 2, 3, 4, 6, 7]

    it('should return -1 when the value is not present', function() {
      assert.equal(linearSearch(testArr, 11).index, -1);
    });
  
    it('should return index when the value is present', function() {
      assert.equal(linearSearch(testArr, 2).index, 1);
    });
  
    it('empty array should return -1', function() {
      assert.equal(linearSearch([], 1).index, -1);
    });

    it('should not try more then needed', function() {
      maxTries = Math.log2(testArr.length) + 1
      assert.equal(binarySearch(testArr, 7).tries < maxTries, true);
    });
  });
});

describe('Searching algorithms', function() {
  describe('#bubbleSort()', () => {
    it('should not error on empty array', function() {
      const input = [];
      const expectedOutput = [];
      const result = bubbleSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should sort', function() {
      const input = [3, 5, 1, 11, 3];
      const expectedOutput = [1, 3, 3, 5, 11];
      const result = bubbleSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })
  })

  describe('#insertionSort()', () => {
    it('should not error on empty array', function() {
      const input = [];
      const expectedOutput = [];
      const result = insertionSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should not break on single element', function() {
      const input = [1];
      const expectedOutput = [1];
      const result = insertionSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should sort', function() {
      const input = [3, 5, 1, 11, 3];
      const expectedOutput = [1, 3, 3, 5, 11];
      const result = insertionSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })
  })

  describe('#countingSort()', () => {
    it('should not error on empty array', function() {
      const input = [];
      const result = countingSort(input);
      const expectedOutput = [];
      assert.deepStrictEqual(result, expectedOutput);
    })

    it('should sort', function() {
      const input = [3, 5, 1, 11, 3];
      const expectedOutput = [1, 3, 3, 5, 11];
      const result = countingSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should work with single elements', function() {
      const input = [5];
      const expectedOutput = [5];
      const result = countingSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should throw on unsupported input', function() {
      const input = [-4];
      assert.throws(() => countingSort(input))
    })
  })

  describe('#mergeSort()', () => {
    it('should not error on empty array', function() {
      const input = [];
      const result = mergeSort(input);
      const expectedOutput = [];
      assert.deepStrictEqual(result, expectedOutput);
    })

    it('should sort', function() {
      const input = [3, 5, 1, 11, 3];
      const expectedOutput = [1, 3, 3, 5, 11];
      const result = mergeSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should work with single elements', function() {
      const input = [5];
      const expectedOutput = [5];
      const result = mergeSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })
  })

  describe('#quickSort()', () => {
    it('should not error on empty array', function() {
      const input = [];
      const result = quickSort(input);
      const expectedOutput = [];
      assert.deepStrictEqual(result, expectedOutput);
    })

    it('should sort', function() {
      const input = [3, 5, 1, 11, 3];
      const expectedOutput = [1, 3, 3, 5, 11];
      const result = quickSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })

    it('should work with single elements', function() {
      const input = [5];
      const expectedOutput = [5];
      const result = quickSort(input);
      assert.deepStrictEqual(result, expectedOutput)
    })
  })
});