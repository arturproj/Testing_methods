const isEven = (num) => {
  return Number(num) !== "NaN" && Number(num) % 2 === 0 ? true : false;
};

module.exports = isEven;
