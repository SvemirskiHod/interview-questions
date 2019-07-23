// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My initial solution
function chunk(array, size) {
  const chunked = [];
  const number_of_chunks = Math.ceil(array.length / size);
  for (var i = 1; i <= number_of_chunks; i++) {
    const temp_chunk = [];
    for (var j = (i * size - size); j < (i * size); j++) {
      array[j] ? temp_chunk.push(array[j]) : null;
    }
    chunked.push(temp_chunk);
  }
  return chunked;
}

// Stephen solution 1
function chunk(array, size) {
  const chunked = [];
  // Iterate array
  for (var i = 0; i < array.length; i++) {
    const last_chunk = chunked[chunked.length - 1];
    // If last chunk is full or no chunks exist, create a new one
    // and insert the current element
    if (!last_chunk || last_chunk.length === size) {
      chunked.push([array[i]]);
    } else {
      // if the the last chunk exists, push the current element to it
      last_chunk.push(array[i]);
    }
  }
  return chunked;
}

// Stephen solution 2 - with array slice
// Works because if slice is has larger parameters than what's left in the array
// it won't returned undefined's, but rather up to the last array element
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
