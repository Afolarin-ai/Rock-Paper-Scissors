const hour = 10;
let name = "Afolarin";
if (hour >= 6 && hour < 12) {
  console.log("Good morning " + name);
} else if (hour >= 12 && hour < 17) {
  console.log("Good afternoon " + name);
} else if (hour >= 17 && hour <= 24) {
  console.log("Good night! " + nam);
}
let discount;
let age = 85;
const isHoliday = true;
if ((age <= 6 || age >= 65) && isHoliday === false) {
  // price = price - discount;
  console.log("Discount");
} else {
  console.log("No Discount");
}
let numero = Math.random();
let result;
let guess = "tails";
if (numero < 0.5) {
  result = "heads";
  console.log(result);
  guess === result ? console.log("You win!") : console.log("You lose!");
} else {
  result = "tails";
  if (guess == result) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
  console.log(result);
}
