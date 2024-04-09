
   $("#addMovieBtn").click(function() {

    let output = `
      <div class="form-group">
      <input name="image" id="addImage" placeholder="Add image movie" class="form-control"> 
      </div>
      <div class="form-group">
      <input name="title" id="addTitle" placeholder="Add title for movie" class="form-control"> 
      </div>
      <div class="form-group">
      <input name="year" id="addYear" placeholder="Add year for movie" class="form-control"> 
      </div>
      <div class="form-group">
      <input name="genre" id="addGenre" placeholder="Add genre for movie" class="form-control"> 
      </div>
      <div class="form-group">
      <input name="description" id="addDescription" placeholder="Add description for movie" class="form-control"> 
      </div>
      <div class="p-3">
      <button id="addBtn"  class="btn btn-dark">Add</button>
      </div>  
    `
      $("#addForm").append(output)
      $("#addForm").toggle()

//  ...add movie form to the DOM dinamically...

      let outputM =""
     $("#addBtn").click(function() {
      let title = $("#addTitle").val()
      let image =$("#addImage").val()
      let genre = $("#addGenre").val()
      let year = $("#addYear").val()
      let description = $("#addDescription").val()
      outputM =`
      <div class="col-lg-3 col-md-6 col-12 p-1">
      <div class="card">
      <img src="${image}" class="card-img-top" onclick="movieS()" >
      <div  class="card-body new" id="cardBody">
        <h4 id="title"> ${title}</h4>
        <p>${genre}</p>
        <p>${year}</p>
        <p>${description}</p>
       
      </div>
      
      </div> 
      </div>
    
    `
    let erok= true;
    if(title.length > 250){
      $("#error-message").text("Limit title 250 char.")
      erok = false;
     }
     if (title === "" || image === "" || year === "" || genre === "" || description=== "") {
      $("#error-message").text("empty input")
      erok= false;
     }

     if(description.length > 500) {
      $("#error-message").text("Limit description 500 char.")
      erok = false
     }
     if(erok){
      $("#moviesCards").append(outputM)
      }
      
     })
      
   })
   function movieS() {
    $(".card-body.new").toggle()
 }

 // ...validation add movie dinamically...

 


