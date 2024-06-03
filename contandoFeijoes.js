function countBs(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      counter++;
    }
  }
  return counter;
}

function countChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
