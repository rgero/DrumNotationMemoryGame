const fs = require('fs-extra');
const path = require('path');

// This is going to change once we get the server implenentation fully up and running.
let desiredPath = path.join("public", "images", "cards");
let sourcePath = path.join("src", "CardData");

fs.emptyDir(desiredPath, err => {
    if (err) { return console.error(err) }
})

fs.copy(sourcePath, desiredPath, err => {
  if (err) { return console.error(err) }
})