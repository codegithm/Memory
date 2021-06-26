const jsdom = require("jsdom");
const fs = require("fs");
const dom = fs.readFileSync("index.html", "utf8");

const { JSDOM } = jsdom;
const { document } = new JSDOM(dom).window;
global.document = document;

const {
  storeCardDetails,
  newGame,
  randomClasses,
} = require("../src/memoryGame");

const card1 = document.querySelector(".card");
const card2 = document.querySelector(".card2");

let event = document.createEvent("CustomEvent");
event.initEvent("click", true, true);

describe("When two cards of the same Id are clicked ", () => {
  beforeAll(function () {
    card1.addEventListener("click", () => {
      storeCardDetails(card1, 1);
    });

    card2.addEventListener("click", () => {
      storeCardDetails(card2, 1);
    });
    spyOn(card1.classList, "add");
    spyOn(card2.classList, "add");

    card1.dispatchEvent(event);
    card2.dispatchEvent(event);
  });

  it("newGame.emptyArraysAndRemoveAddedClass() should be called once", () => {
    expect(newGame.selectedImages).toEqual([
      randomClasses[1],
      randomClasses[1],
    ]);
  });
  it("newGame.emptyArraysAndRemoveAddedClass() should be called once", () => {
    expect(newGame.selectedCard).toEqual([card1, card2]);
  });
  it("card1.classList.add() should be called", () => {
    expect(card1.classList.add).toHaveBeenCalledTimes(1);
  });
  it("card2.classList.add() should be called", () => {
    expect(card2.classList.add).toHaveBeenCalledTimes(1);
  });
  it("card1.classList.add() should be called with a class name", () => {
    expect(card1.classList.add).toHaveBeenCalledWith(randomClasses[1]);
  });
  it("card2.classList.add() should be called with a class name", () => {
    expect(card2.classList.add).toHaveBeenCalledWith(randomClasses[1]);
  });
});

describe("When two cards of the same Id are clicked ", () => {
  beforeAll(function () {
    card1.addEventListener("click", () => {
      storeCardDetails(card1, 1);
    });

    card2.addEventListener("click", () => {
      storeCardDetails(card2, 1);
    });

    card1.dispatchEvent(event);
    card2.dispatchEvent(event);
    spyOn(card1.classList, "remove");
    spyOn(card2.classList, "remove");

    newGame.emptyArraysAndRemoveAddedClass();
  });
  it("card1.classList.add() should be called with a class name", () => {
    expect(card1.classList.remove).toHaveBeenCalled();
  });
  it("card2.classList.add() should be called with a class name", () => {
    expect(card2.classList.remove).toHaveBeenCalled();
  });
  it("card1.classList.add() should be called with a class name", () => {
    expect(card1.classList.remove).toHaveBeenCalledWith(randomClasses[1]);
  });
  it("card2.classList.add() should be called with a class name", () => {
    expect(card2.classList.remove).toHaveBeenCalledWith(randomClasses[1]);
  });
});
