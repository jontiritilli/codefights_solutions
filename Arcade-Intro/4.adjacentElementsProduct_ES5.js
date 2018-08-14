function adjacentElementsProduct(inputArray) {
  let candidateArray = [];
  for(let i = 0; i<inputArray.length-1; i++){
      candidateArray.push(inputArray[i] * inputArray[i+1]);
  }
  return Math.max.apply(null, candidateArray)
}
