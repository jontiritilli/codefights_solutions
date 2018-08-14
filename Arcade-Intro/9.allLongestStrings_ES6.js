const allLongestStrings = inputArray => {
  let maxLength = Math.max(...inputArray.map( word => word.length));

  return inputArray.filter(
    word => word.length === maxLength
  );
}