const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log("local root called");
  res.send('Hello somrad!')
  res.redirect("/index.html")
})

app.get("/test", (req, res)=> {
  res.send('test succeeded!')
});

app.get("/data", (req, res)=> {
  let exampleData = {
    name: "Somrad",
    age: 23
  }
  res.send(exampleData)
});

app.listen(port, () => {
  console.log(`My first REST API listening at http://localhost:${port}`)
})