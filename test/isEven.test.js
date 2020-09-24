const { expect } = require("chai");

const isEven = require("./../src/isEven");

describe("isEven", () => {
  it("should nombre 2 est un PAIR", () => {
    expect(isEven(2)).equal(true);
  });
  it("should nombre 9 est un IMPAIR", () => {
    expect(isEven(9)).equal(false);
  });

  it("should string '152' est un PAIR", () => {
    expect(isEven("152")).equal(true);
  });

  it("should string '91' est un IMPAIR", () => {
    expect(isEven("91")).equal(false);
  });

  it("should string 'sdsd' est un NaN", () => {
    expect(isEven("sdsd")).equal(false);
  });

  it("should nombre -8 est un PAIR", () => {
    expect(isEven(-8)).equal(true);
  });
  it("should nombre -9 est un IMPAIR", () => {
    expect(isEven(-9)).equal(false);
  });

  it("should nombre 8.0 est un PAIR", () => {
    expect(isEven(8.0)).equal(true);
  });
  it("should nombre 8.2 est un IMPAIR", () => {
    expect(isEven(8.2)).equal(false);
  });
});
