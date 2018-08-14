function allLongestStrings(inputArray) {
  var maxLength = 0;
  for(var i = 0; i < inputArray.length; i++){
    var length = inputArray[i].length;
    if(length > maxLength){
      maxLength = length;
    }
  }
  var longestWords = inputArray.filter(function(word){
    return word.length === maxLength;
  });

  return longestWords;
}
