/* eslint-disable */
import "bootstrap";
import "./style.css";

// click button v1
/*document.querySelector(".dealCard").addEventListener("click", function() {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".cardNumber").innerHTML = randomNumbers();
});

//click button v2
document.querySelector(".dealCard").onclick = function() {
  newCard();
};
function newCard() {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".cardNumber").innerHTML = randomNumbers();
}*/

window.onload = () => {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".cardNumber").innerHTML = randomNumbers();
};

// timer

/*setInterval(() => {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".cardNumber").innerHTML = randomNumbers();
}, 1000);*/

// random suit
let randomSuit = () => {
  let suit = ["heart", "diamond", "spade", "club"];
  let suitIndex = Math.floor(Math.random() * suit.length);
  return suit[suitIndex];
};

// random number
let randomNumbers = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "J",
    "K",
    "Q"
  ];
  let numbersIndex = Math.floor(Math.random() * numbers.length);
  return numbers[numbersIndex];
};
