fetch('https://www.omdbapi.com/?t=parasite&y=2019&apikey=2d274e67')
.then(resp => resp.json())
.then (data => console.log(data));



