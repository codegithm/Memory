class MemoryGame {
  constructor() {
    this.selectedImages = [];
    this.selectedCard = [];
    this.amountOfCardsMatched = 1;
  }
  setImage(image) {
    this.selectedImages.push(image);
  }
  storeSelecteCardAndFlipImage(card, image) {
    if (this.selectedCard.indexOf(card) < 0) {
      this.selectedCard.push(card);
    }
    card.classList.add(image);
  }
  emptyArraysAndRemoveAddedClass() {
    this.selectedCard[0].classList.remove(this.selectedImages[0]);
    this.selectedCard[1].classList.remove(this.selectedImages[1]);
    this.selectedImages = [];
    this.selectedCard = [];
  }
}

const pictures = [
  "react",
  "angular",
  "vue",
  "ionic",
  "flutter",
  "bootstrap",
  "javascript",
  "mongo",
];
function getRandomNum() {
  return Math.floor(Math.random() * 8);
}

function storeRandomClasses(array, length) {
  while (array.length < length) {
    let randomNum = getRandomNum();
    if (array.indexOf(pictures[randomNum]) < 0) {
      array.push(pictures[randomNum]);
    }
  }
}
function generateRandomClasses() {
  let setOfClassesOne = [];
  let setOfClassesTwo = [];

  storeRandomClasses(setOfClassesOne, 8);

  storeRandomClasses(setOfClassesTwo, 8);

  let combined = [];
  for (let clas in setOfClassesOne) {
    combined.push(setOfClassesOne[clas]);
  }
  for (let clas in setOfClassesTwo) {
    combined.push(setOfClassesTwo[clas]);
  }
  return combined;
}

let randomClasses = generateRandomClasses();

let newGame = new MemoryGame();
function storeSelectedCardAndCardId(clickedCard, clickedCardClass) {
  if (newGame.selectedCard.length < 2) {
    newGame.storeSelecteCardAndFlipImage(clickedCard, clickedCardClass);
    newGame.setImage(clickedCardClass);
  }
}

function removeFoundClassInAllCards() {
  let cards = [];
  for (let i = 1; i <= 16; i++) {
    let card = eval(`card${i}`);
    cards.push(card);
  }
  for (index in cards) {
    cards[index].classList.remove("found");
  }
}

function reset() {
  if (newGame.amountOfCardsMatched >= 8) {
    randomClasses = generateRandomClasses();
    newGame.amountOfCardsMatched = 0;
    setTimeout(function () {
      removeFoundClassInAllCards();
    }, 1600);
  }
  if (
    newGame.selectedImages[0] === newGame.selectedImages[1] &&
    newGame.selectedCard[0] != newGame.selectedCard[1]
  ) {
    newGame.amountOfCardsMatched++;
    newGame.selectedCard[0].classList.add("found");
    newGame.selectedCard[1].classList.add("found");
    newGame.emptyArraysAndRemoveAddedClass();
  } else {
    newGame.emptyArraysAndRemoveAddedClass();
  }
}

function storeCardDetails(card, num) {
  let clickedCard = card;
  let clickedCardClass = randomClasses[num];
  if (newGame.selectedCard.indexOf(card) < 0) {
    storeSelectedCardAndCardId(clickedCard, clickedCardClass);
  }

  if (
    newGame.selectedImages.length == 2 &&
    newGame.selectedCard.length == 2 &&
    newGame.selectedCard.indexOf(card) >= 0
  ) {
    setTimeout(function () {
      reset();
    }, 1500);
  }
}

module.exports = {
  removeFoundClassInAllCards,
  reset,
  storeCardDetails,
  generateRandomClasses,
  pictures,
  newGame,
  randomClasses,
};
