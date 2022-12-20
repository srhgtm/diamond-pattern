var n = 5;
let string = "";
let strin = "";
for (var i = 1; i <= n; i++) {
  for (var j = n; j > i; j--) {
    string += " ";
  }

  for (var k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// console.log(string);

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    strin += " ";
  }

  for (k = i + 1; k <= 9 - i; k++) {
    strin += "*";
  }
  strin += "\n";
}
console.log(string + strin);