let cardsArr = [
  (card1 = document.querySelector(".card")),
  (card2 = document.querySelector(".card2")),
  (card3 = document.querySelector(".card3")),
  (card4 = document.querySelector(".card4")),
  (card5 = document.querySelector(".card5")),
  (card6 = document.querySelector(".card6")),
  (card7 = document.querySelector(".card7")),
  (card8 = document.querySelector(".card8")),
  (card9 = document.querySelector(".card9")),
  (card10 = document.querySelector(".card10")),
  (card11 = document.querySelector(".card11")),
  (card12 = document.querySelector(".card12")),
  (card13 = document.querySelector(".card13")),
  (card14 = document.querySelector(".card14")),
  (card15 = document.querySelector(".card15")),
  (card16 = document.querySelector(".card16")),
];
const addListner = (arr) => {
  arr.map((card, i) => {
    return card.addEventListener("click", () => {
      storeCardDetails(card, i);
    });
  });
};

addListner(cardsArr);

module.exports = { cardsArr, addListner };
