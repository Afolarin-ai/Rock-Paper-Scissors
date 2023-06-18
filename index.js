const subscribe = document.querySelector('.subscribeButton');
const r = document.querySelector('.rock');
const p = document.querySelector(".paper");
const s = document.querySelector(".scissors");
const reset = document.querySelector('.reset');
const calculate = document.querySelector('.calculate');
const cart = document.querySelector('.cost');
// document.querySelector(".cost").addEventListener("keydown", inputRun(event));
r.addEventListener("click",computerChoice);
r.addEventListener("click", rock);
p.addEventListener("click", computerChoice);
p.addEventListener("click", paper);
s.addEventListener("click", computerChoice);
s.addEventListener("click", scissors);
cart.addEventListener("keydown", inputRun);
reset.addEventListener("click", resetScore);
subscribe.addEventListener("click", subscribebtn );
calculate.addEventListener("click", calculateCost);
let computer;
let number;
let result;

function subscribebtn(){
    if(subscribe.innerHTML === 'Subscribe'){
        subscribe.innerHTML = 'Subsrcibed';
        subscribe.classList.add('subscribed');
    }
    else{
        subscribe.innerHTML = 'Subscribe';
        subscribe.classList.remove('subscribed');
    }
}

let score = JSON.parse(localStorage.getItem("Scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();

// if (score === null) {
//     score = {
//         wins: 0,
//         losses:0,
//         ties:0
//     }
// }
console.log(score);

function computerChoice() {
  number = Math.random();
  if (number >= 0 && number < 1 / 3) {
    computer = "rock";
  } else if (number >= 1 / 3 && number < 2 / 3) {
    computer = "paper";
  } else if (number >= 2 / 3 && number < 1) {
    computer = "scissors";
  }
}
function rock() {
  if (computer === "rock") {
    result = "Tie";
  } else if (computer === "paper") {
    result = "Lost";
  } else if (computer === "scissors") {
    result = "Win";
  }
  scoreboard();
  document.querySelector(".result").innerHTML = `You ${result}`;
  document.querySelector(".plays").innerHTML = `You
        <img class = "img" src="./assets/rock-emoji.png" alt="">
        <img class = "img" src="./assets/${computer}-emoji.png" alt="">
        Computer`;
  localStorage.setItem("Scores", JSON.stringify(score));
}
function paper() {
  if (computer === "rock") {
    result = "Win";
  } else if (computer === "paper") {
    result = "Tie";
  } else if (computer === "scissors") {
    result = "Lost";
  }
  scoreboard();
  document.querySelector(".result").innerHTML = `You ${result}`;
  document.querySelector(".plays").innerHTML = `You
        <img class = "img" src="./assets/paper-emoji.png" alt="">
        <img class = "img" src="./assets/${computer}-emoji.png" alt="">
        Computer`;
  localStorage.setItem("Scores", JSON.stringify(score));
}

function scissors() {
  if (computer === "rock") {
    result = "Lost";
  } else if (computer === "paper") {
    result = "Win";
  } else if (computer === "scissors") {
    result = "Tie";
  }
  scoreboard();
  document.querySelector(".result").innerHTML = `You ${result}`;
  document.querySelector(".plays").innerHTML = `You
        <img class = "img" src="./assets/scissors-emoji.png" alt="">
        <img class = "img" src="./assets/${computer}-emoji.png" alt="">
        Computer`;
  localStorage.setItem("Scores", JSON.stringify(score));
}
function scoreboard() {
  if (result === "Win") {
    score.wins += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  } else if (result === "Lost") {
    score.losses += 1;
  }
  updateScore();
  document.querySelector(".result").innerHTML = result;
}
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("Scores");
  updateScore();  
}

function updateScore(){
      document.querySelector(
        ".score"
      ).innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}
function calculateCost(){
  const costReference = document.querySelector('.cost');
  let cost = Number(costReference.value);
  if(cost < 40){
    cost += 10;
  }
  document.querySelector('.totalCost').innerHTML = `$${cost}`;
}
function inputRun(event){
  if (event.key === "Enter") {
    calculateCost();
  }
}

// const cart = {
//   basketball: {
//     price: 2095,
//   },
// };
// cart.basketball.price += 500;
// console.log(cart.basketball);
// cart.basketball["delivery time"] = "3 days";
// console.log(cart.basketball);
// function comparePrice(product1 = "Nike", product2 = "Adidas") {
//   product1["name"] = "nike";
//   product1["price"] = 2300;
//   product2["name"] = "adidas";
//   product2["price"] = 1700;
//   if (product1.price > product2.price) {
//     return product1;
//   } else {
//     return product2;
//   }
// }
// console.log(comparePrice());
// function isSameProduct(product1, product2) {
//   product1.name = "Nike";
//   product1.price = 2300;
//   product2.name = "Adidas";
//   product2.price = 1700;
//   if (product1.name === product2.name || product1.price === product2.price) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isSameProduct("Nike", "Adidas"));
// console.log("Good Morning".toLowerCase());
// console.log("Test!".repeat(3));
