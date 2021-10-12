const searchMovie = {
          getInput() {
           document.getElementById('searchform').addEventListener('submit', (e) => {
              e.preventDefault();
              const search = document.getElementById('inputTitle').value;
              console.log(search);
              this.getMovie(search);
          });
  
  },
  
  
  async getMovie(movie) {
      fetch(`https://www.omdbapi.com/?t=${movie}&apikey=3ea53594`)
          .then(response => {
             return response.json()
          })
          .then(data => {
              console.log(data);
              let htmlString = `
               <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="TBD" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
              `;
              document.getElementById('card').innerHTML = htmlString;
          });
  }
  
  }
  
  searchMovie.getInput();