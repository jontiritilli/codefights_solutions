function centuryFromYear(year) {
  var a = Math.floor(year / 100);
  return (year % 100 === 0) ? a : ++a;
}