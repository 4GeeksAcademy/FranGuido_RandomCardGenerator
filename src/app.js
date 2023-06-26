/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".cardNumber").innerHTML = randomNumbers();
};

/*document.querySelector(".btn").addEventListener("click", myFunction);

function myFunction() {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".cardNumber").innerHTML = randomNumbers();
}*/

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
