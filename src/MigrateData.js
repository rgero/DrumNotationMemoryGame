const fs = require('fs-extra');
const path = require('path');

let desiredPath = path.join("public", "images", "cards");
let sourcePath = path.join("src", "CardData");

fs.emptyDir(desiredPath, err => {
    if (err) return console.error(err)
    console.log('success!')
  })

  fs.copy(sourcePath, desiredPath, err => {
    if (err) return console.error(err)
    console.log('success!')
  })