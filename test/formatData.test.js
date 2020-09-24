const { expect } = require("chai");

const formatDate = require("./../src/formatDate");

describe("formatDate", () => {
  it("should format date '2020-09-24'", () => {
    expect( formatDate("2020-09-24") ).equal("24/09/2020");
  });
  it("should format date '2020.09.24'", () => {
    expect( formatDate("2020.09.24") ).equal("24/09/2020");
  });
  it("should format date '20200924'", () => {
    expect( formatDate("20200924") ).equal(null);
  });
  it("should format date '2020,09,24'", () => {
    expect( formatDate("2020,09,24") ).equal("24/09/2020");
  });
  it("should format date '2020 09 24'", () => {
    expect( formatDate("2020 09 24") ).equal("24/09/2020");
  });
});
