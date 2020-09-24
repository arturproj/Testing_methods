const formatDate = (date) => {
  var regEx = /^\d{4}[-. ,]\d{2}[-. ,]\d{2}|\d{4}\d{2}\d{2}$/;
  let data = new Date(date);
  if (!date.match(regEx) || data.toString() === "Invalid Date") return null; // Invalid format
  let month = data.getMonth() + 1;
  let day = data.getDate();
  let year = data.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  return day + "/" + month + "/" + year;
};

module.exports = formatDate;
