const args = process.argv;
let input = args[2];
let temp = "";
if (!input) {
  return console.log("There is no input");
}
for (let i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    temp += "4";
  } else if (input[i] === "e") {
    temp += "3";
  } else if (input[i] === "o") {
    temp += "0";
  } else if (input[i] === "l") {
    temp += "1";
  } else {
    temp += input[i];
  }
};
console.log(temp);