let output =""

$(movieList).each(function(index, movie) {
 
 output +=`
   
   <div class="col-lg-3 col-md-6 col-12 p-1" id="cards">
   <div class="card">
   <img src="${movie.image}" class="card-img-top" onclick="movieSelect(${movie.id})" >
   <div class="card-body">
     <h4 id="title"> ${ movie.title}</h4>
     <p>${movie.genre}</p>
     <p>${movie.year}</p>
     <p>${movie.description}</p>
   </div>
   
   </div> 
   </div>
  
 `
  })
   $("#searchMovie").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#cards ").filter(function() {
      $(this).toggle($(this).text().toLowerCase().includes(value))
    });
  }); 

  $("#moviesCards").append(output)
 
  function movieSelect(id) {
    $(".card-body").eq(id).toggle()
    
  }
   // ..search and add movies...