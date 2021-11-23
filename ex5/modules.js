import * as fs from 'fs/promises';
//Get data from the file
let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result);
//loop over the data
for (let i in data) {
// create filename
let filename = `${i}.json`
// stringify value
let bg = JSON.stringify(data[i]);
    await fs.writeFile(filename,bg);
  }

