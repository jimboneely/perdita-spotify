$(".search-btn").on("click", function(event){
  event.preventDefault();
  var song = $("#song-name").val().trim();

  $.get("/search/" + song, function(data){
    console.log(song);
    console.log(data);
  })
})
