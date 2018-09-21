var favs = $(".favs");
var tour = $(".tour");
var submit = $(".submitBtn");
 var userName = $("#newUser").val().trim();
 //var location = $("#location").val().trim();
 var bandName = $("#bandName").val().trim();

function hideFavs(){
favs.hide();
}

function hideTour(){
    tour.hide();
    }
hideFavs();
hideTour();

  $(submit).on('click', function() {
      tour.fadeIn("slow");
      $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated hinge');
    });
    searchForBand();
  })

  $("tr").click(function(){
      favs.fadeIn('slow');
  })

//   var newRow = $("<tr>").append(
//     $("<td>").text("#bandName"),
//     $("<td>").text("#city"),
//     $("<td>").text("#date"),
//     $("<td>").text("#cost")
    
// );
// $("#entry > tbody").append(newRow);
$('.funky-animations h4').on('click', function() {
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated hinge');
    });
});

//add code to move artist to "My Band Picks" table and call firebase function