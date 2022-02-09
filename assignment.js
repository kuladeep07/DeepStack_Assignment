//

if (process.argv.length < 3) {
  console.log(
    "Usage: node " +
      process.argv[1] +
      "\n ENTER FILENAME NAME \n Ex: node assignment.js fileName.txt"
  );
  process.exit(1);
}
// Read the file from console.
var fs = require("fs"),
  filename = process.argv[2];
fs.readFile(filename, "utf8", function (err, data) {
  if (err) throw err;

  //DataProcessing - Removed all special charcters from string
  let perfectString = data;
  perfectString = perfectString.replace(/[^a-zA-Z0-9']/g, " ");
  let arr = perfectString.split(" ");

  //filtered white spaces
  arr = arr.filter(function (entry) {
    return entry.trim() != "";
  });

  // i used map because i can map key, value for letters.

  let mapp = new Map();

  for (let keys = 0; keys <= arr.length - 1; keys++) {
    let currentKey = arr[keys];

    // checking if map has current key.

    if (mapp.has(currentKey)) {
      let newNum = mapp.get(currentKey);
      mapp.set(currentKey, newNum + 1); //
      // console.log(currentValue);
    } else {
      mapp.set(currentKey, 1);
    }
  }
  //Displaying the map as shown in assignment question.
  mapp.forEach((key, value) => {
    console.log(value + " " + key);
  });
});
