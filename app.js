const { readFile, read } = require("fs");
const { result } = require("lodash");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile("./content/first.txt", "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

getText("./content/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
