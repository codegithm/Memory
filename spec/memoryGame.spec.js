const { pictures, generateRandomClasses } = require("../src/memoryGame");

describe("generateRandomClasses()", () => {
  it(" should generate duplicates o the pictures array", () => {
    let random = generateRandomClasses();
    expect(random.length).toBe(pictures.length * 2);
  });
  it("should generate random Ids", () => {
    let random1 = generateRandomClasses();
    let random2 = generateRandomClasses();
    expect(random1).not.toBe(random2);
  });
});
