module.exports = function({ method }) {
  let res = null;
  switch (method) {
    case "GET":
      res = [20, 40];
      break;
    case "POST":
      res = [1, 2, 3];
      break;
    default:
      res = null;
  }
  return res;
};
