window.onload = function () {
  getData();
}

async function getData(){
  await fetch(`https://swapi.dev/api/films`)
  .then(resp => resp.json())
  .then(data => {
  console.log(data.results);
  showData(data)
  })
}

function showData(data){
  data.results.forEach(data => {
    let htmlString = `
  <h1>Title: ${data.title}</h1>
  <h2>Episode ${data.episode_id}</h2>
  `
  document.getElementById('data').innerHTML= htmlString;
  });
  
}