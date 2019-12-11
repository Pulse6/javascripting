const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) { //when i is less than the length of ingredients it will keep adding one and printing
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) { //when i is less than the length of ingredients it will keep adding one and printing
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length; i >= 0; i--) { // it starts at the length of ingrdients and -1 evertime is goes in to the loop until i is less than 0
  console.log(ingredients[i]);
}