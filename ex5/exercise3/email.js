const axios = require('axios');
import * as fs from 'fs/promises';


let response = await axios.get('https://jsonplaceholder.typicode.com/comments')

for(let comment of response.data){
  //add to file
  await fs.appendFile('emails.json', comment)
}
